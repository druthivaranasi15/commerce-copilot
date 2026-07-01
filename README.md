# 🛍️ Commerce Copilot

An AI-powered e-commerce assistant that analyzes product images and automatically generates compelling product descriptions, SEO keywords, and cross-references live product links across major Indian e-commerce platforms.

## 📸 Screenshots

### Main Dashboard - Visual Feature Engine
![Commerce Copilot Dashboard](./images/Screenshot%202026-07-01%20175158.png)
*Upload product images and analyze them with AI-powered Visual Feature Engine*

### Product Analysis & Description Generation
![Product Analysis Interface](./images/Screenshot%202026-07-01%20175221.png)
*AI generates professional product descriptions, social hooks, and SEO keywords*

## ✨ Key Features

### 🖼️ Visual Feature Engine
- Upload product images to automatically analyze and extract product details
- AI-powered image recognition using Google Gemini Vision API
- Intelligent product categorization and asset recognition

### 📝 Intelligent Product Description Generator
- Generates professional, engaging product descriptions
- Creates compelling "Social Commercial Hook" copy for marketing
- Generates SEO-optimized keyword matrices
- Perfect for product listings and marketing campaigns

### 🔍 Live Marketplace Cross-Reference Router
- Automatically searches for the same product across multiple platforms:
  - **Amazon** 🔗
  - **Myntra** 🔗
  - **Google Shopping** 🔗
- Provides direct links to live product pages with real-time pricing
- One-click access to verified product listings

### 🎯 Smart Asset Management
- Saved deck collection for frequently used products
- Quick access to previously analyzed products
- Organized product history with timestamps

### 👀 Dual View Options
- **Copywriter View** - Marketing-focused content and descriptions
- **Metadata View** - Technical product specifications and details

## 🎨 Technology Stack

### Frontend
- **React.js** - Interactive user interface with modern UI/UX
- **CSS/Styling** - Dark theme, responsive design
- **Image Processing** - Client-side image handling

### Backend
- **Node.js** - Server-side logic and API management

### AI & APIs
- **Google Gemini Vision API** - Advanced image analysis and description generation
- **SerpApi** - Real-time product search and marketplace integration
- **E-Commerce Integrations** - Amazon, Myntra, Google Shopping

## 📋 Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn package manager
- Google Gemini API key
- SerpApi API key
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/druthivaranasi15/commerce-copilot.git
   cd commerce-copilot
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the backend directory:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   SERPAPI_API_KEY=your_serpapi_key_here
   PORT=5000
   NODE_ENV=development
   ```

## 🚀 Getting Started

### Start the Backend Server
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

### Start the Frontend Application
```bash
cd frontend
npm start
```
Application opens at `http://localhost:3000`

## 📖 How to Use

1. **Upload Product Image**
   - Click on the image upload area
   - Select a product image (clothing, accessories, etc.)
   - Wait for image processing and matrix loading

2. **AI Analysis**
   - Gemini Vision analyzes the product image
   - System extracts product details and characteristics
   - Generates relevant SEO keywords automatically

3. **Generate Descriptions**
   - Click "PARSE PRODUCT PROFILE" button
   - AI generates professional product description
   - Creates marketing-focused "Social Commercial Hook"
   - Provides SEO keyword matrix for search optimization

4. **Cross-Reference Products**
   - View "LIVE MARKETPLACE CROSS-REFERENCE ROUTER"
   - Click on Amazon, Myntra, or Google Shopping
   - Get direct links to the same product across platforms
   - Access real-time pricing and availability

5. **Choose Your View**
   - Select **Copywriter View** for marketing content
   - Select **Metadata View** for technical specifications

6. **Save & Organize**
   - Save frequently used products to your deck collection
   - Quick access from the saved deck collection sidebar
   - Maintain a library of analyzed products

## 💡 Use Cases

- **E-Commerce Product Listing** - Generate bulk product descriptions instantly
- **Marketplace Aggregation** - Compare same products across platforms
- **Content Marketing** - Create SEO-optimized product copy
- **Product Research** - Analyze competitor products quickly
- **Multi-Platform Selling** - Manage listings across Amazon, Myntra, and other platforms
- **Fashion & Accessories** - Perfect for clothing, jewelry, and cosmetic products

## 🔄 Workflow Example

```
1. Upload product image
   ↓
2. AI analyzes and extracts details
   ↓
3. Generate description & SEO keywords
   ↓
4. Search across Amazon, Myntra, Google Shopping
   ↓
5. Get direct product links & pricing
   ↓
6. Use content in your listings/marketing
```

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is currently unlicensed. See the repository for licensing details.

## 🆘 Troubleshooting

**Issue: Image not uploading**
- Ensure image format is supported (JPG, PNG, WebP)
- Check file size is under 10MB
- Verify browser permissions for file access

**Issue: API errors**
- Verify API keys are correct in `.env` file
- Check internet connection
- Ensure API quotas are not exceeded

**Issue: No marketplace results**
- Product might not be available on selected platforms
- Try different product images
- Check SerpApi quota and credits

## 🗺️ Roadmap

- [ ] Support for more e-commerce platforms (Flipkart, Ajio, etc.)
- [ ] Batch image upload and processing
- [ ] User authentication and saved preferences
- [ ] Price tracking and comparison charts
- [ ] Product recommendation engine
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard

## 🔐 Security

- Never commit `.env` files or API keys
- Use environment variables for all sensitive data
- Implement proper authentication before production deployment
- Sanitize user inputs and file uploads

## 📞 Support & Feedback

- Open an issue on GitHub for bugs or feature requests
- Check existing issues before creating duplicates
- Provide detailed descriptions and screenshots when reporting issues

---

**Built with ❤️ by the Commerce Copilot Team**

*Transform product images into marketplace-optimized listings with AI magic!* ✨
