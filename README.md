# 🔍 Image Search Engine

> An elegant and responsive image search application powered by Unsplash API

## 📌 Table of Contents
- [Overview](#overview)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔑 API Setup](#-api-setup)
- [💎 Styling Details](#-styling-details)
- [📝 License](#-license)

## Overview

A modern web application that provides a seamless image searching experience with beautiful animations and responsive design.

## ✨ Features
- 🔄 Real-time image search functionality
- 📱 Fully responsive design
- 🎨 Gradient animated background
- 📦 Masonry grid layout
- 🔄 Lazy loading for performance
- 📱 Mobile-friendly interface
- 🔽 "Show more" pagination

## 🛠️ Technologies Used
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![Unsplash API](https://img.shields.io/badge/-Unsplash%20API-000000?style=flat&logo=unsplash)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Image_search_engine.git
```

2. Navigate to project directory:
```bash
cd Image_search_engine
```

3. Configure API Key:
```javascript
const accessKey = "YOUR_UNSPLASH_API_KEY";
```

## 🚀 Usage

1. 🔍 Enter search term in the search box
2. 🖱️ Click "search" or press Enter
3. 📷 Browse through image results
4. ⏬ Click "show more" for additional images
5. 🖱️ Hover over images for scaling effect

## 🔑 API Setup

1. 📝 Register at [Unsplash Developers](https://unsplash.com/developers)
2. 🔨 Create a new application
3. 🔑 Copy your API access key
4. ⚙️ Update the `accessKey` in script.js

## 💎 Styling Details

### 🎨 Design Elements
- 🌈 Animated gradient background (HSL colors)
- 📝 Dancing Script font for headings
- 🟢 Green color scheme (#228B22, #006400)
- 🔄 Smooth transitions & hover effects
- 📱 Responsive masonry layout

### 📐 Layout Features
```css
/* Masonry Grid */
#search-result {
    column-count: 3;
    column-gap: 15px;
    max-width: 1200px;
}

/* Animation */
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

## 📝 License

This project uses Git's auto-detection for text files with LF normalization.

---
### 🔧 Technical Requirements
- Modern web browser
- Internet connection
- Unsplash API key

### 💻 Development
Made with ❤️ using Visual Studio Code
