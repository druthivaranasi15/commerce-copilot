import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import { getJson } from "serpapi";
import { Product } from './Product.js'; // Ensure your Product.js schema includes availableLinks: { googleShopping, amazon, myntra, ajio } and isPinned

const app = express();

// Configure CORS completely to accept methods from local file:// testing environments
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Establish MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected securely to MongoDB Database'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST Route: Process Image, Extract Real-time Links, and Save to Database
app.post('/api/generate-product', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded." });
        }

        const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'API Key missing in environment variables.' });
        }

        const base64Image = req.file.buffer.toString("base64");
        const mimeType = req.file.mimetype;

        // Enforce strict JSON schema structure using the Gemini gateway config
        const payload = {
            contents: [{
                parts: [
                    { text: "Analyze this product image carefully as an e-commerce copywriter. Fill out the response schema details." },
                    { inlineData: { mimeType: mimeType, data: base64Image } }
                ]
            }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        productName: { type: "STRING" },
                        description: { type: "STRING" },
                        tags: { type: "ARRAY", items: { type: "STRING" } }
                    },
                    required: ["productName", "description", "tags"]
                }
            }
        };

        const targetUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

        // 1. Core Gemini Vision Analysis
        const geminiResponse = await fetch(targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey 
            },
            body: JSON.stringify(payload)
        });

        const data = await geminiResponse.json();

        if (!geminiResponse.ok) {
            throw new Error(data.error?.message || `Google API Error: ${geminiResponse.status}`);
        }

        const parsedData = JSON.parse(data.candidates[0].content.parts[0].text);

        // 2. Real-Time Link Extraction Step via SerpApi
        console.log(`Extracting real-world links for: ${parsedData.productName}...`);
        
        let realLinks = {
            googleShopping: `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(parsedData.productName)}`,
            amazon: "",
            myntra: "",
            ajio: ""
        };

        if (process.env.SERPAPI_KEY) {
            try {
                const searchData = await getJson({
                    engine: "google",
                    q: `${parsedData.productName} site:amazon.in OR site:myntra.com OR site:ajio.com`,
                    api_key: process.env.SERPAPI_KEY
                });

                const organicResults = searchData.organic_results || [];

                // Separate matching organic links
                organicResults.forEach(item => {
                    if (item.link.includes("amazon") && !realLinks.amazon) {
                        realLinks.amazon = item.link;
                    } else if (item.link.includes("myntra") && !realLinks.myntra) {
                        realLinks.myntra = item.link;
                    } else if (item.link.includes("ajio") && !realLinks.ajio) {
                        realLinks.ajio = item.link;
                    }
                });
            } catch (searchError) {
                console.error("SerpApi lookup failed, using fallbacks:", searchError.message);
            }
        }

        // Apply clean direct search fallback endpoints for anything SerpApi didn't catch 
        const query = encodeURIComponent(parsedData.productName);
        if (!realLinks.amazon) realLinks.amazon = `https://www.amazon.in/s?k=${query}`;
        if (!realLinks.myntra) realLinks.myntra = `https://www.myntra.com/${query}`;
        if (!realLinks.ajio) realLinks.ajio = `https://www.ajio.com/search/?text=${query}`;

        // 3. Save into MongoDB
        const finalProduct = new Product({
            productName: parsedData.productName,
            description: parsedData.description,
            tags: parsedData.tags,
            availableLinks: realLinks
        });

        const savedDocument = await finalProduct.save();

        // 4. Return to Frontend Canvas
        res.status(201).json(savedDocument);

    } catch (error) {
        console.error("Error processing inventory:", error.message);
        res.status(500).json({ error: error.message || "Internal Server Processing Failure" });
    }
});

// GET Route: Fetch all items, sorting pinned items to the top, then by newest
app.get('/api/products', async (req, res) => {
    try {
        const historyList = await Product.find().sort({ isPinned: -1, createdAt: -1 });
        res.json(historyList);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tracking history.' });
    }
});

// PUT Route: Toggle Pin status of a particular product search match
app.put('/api/products/:id/pin', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID layout format." });
        }

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: "Product asset not found." });

        product.isPinned = !product.isPinned;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Failed to update pin state." });
    }
});

// DELETE Route: Remove a specific product collection item out of MongoDB
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID layout format." });
        }

        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ error: "Product not found." });
        res.json({ message: "Product deleted successfully from inventory." });
    } catch (error) {
        res.status(500).json({ error: "Failed to clear item tracking loop." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));