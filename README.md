# Commerce Copilot

A full-stack e-commerce assistant that leverages AI and real-time product data to help users find and compare products across popular Indian e-commerce platforms.

## 🚀 Features

- **AI-Powered Product Descriptions**: Uses Google Gemini Vision API to generate intelligent product descriptions and insights
- **Multi-Platform Search**: Cross-references products on Amazon, Myntra, and Ajio using SerpApi
- **Live Links**: Provides direct links to products on various e-commerce platforms
- **Full-Stack Application**: Built with modern React frontend and Node.js backend

## 🛠️ Tech Stack

### Frontend
- **React.js** - Interactive user interface

### Backend
- **Node.js** - Server runtime environment

### APIs & Services
- **Google Gemini Vision API** - AI-powered image and text analysis
- **SerpApi** - Real-time product search and web scraping
- **Amazon, Myntra, Ajio** - E-commerce platform integration

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v14.0 or higher)
- npm or yarn package manager
- Google Gemini API key
- SerpApi API key
- Internet connection for API calls

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
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory with:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   SERPAPI_API_KEY=your_serpapi_key
   PORT=5000
   ```

## 🚀 Getting Started

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

## 📖 Usage

1. Upload an image or provide product details
2. The Gemini Vision API analyzes the product and generates descriptions
3. SerpApi searches for the product across Amazon, Myntra, and Ajio
4. View all available products with direct links and pricing
5. Compare products across platforms

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is currently unlicensed. Please refer to the repository for licensing details.

## 🙋 Support

For questions, issues, or suggestions, please:
- Open an issue on the GitHub repository
- Check existing issues for similar problems
- Contact the repository maintainer

## 📌 Roadmap

- [ ] Add more e-commerce platforms
- [ ] Implement user authentication and wishlist
- [ ] Add price comparison charts
- [ ] Mobile app support
- [ ] Enhanced product recommendations

## 🔐 Security & Privacy

This project handles API keys securely. Never commit `.env` files or credentials to the repository. Always use environment variables for sensitive data.

---

**Happy coding!** 🎉

*Last updated: July 2026*
