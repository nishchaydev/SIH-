# 🚀 GitHub Pages Deployment Guide

## INGRES - India Groundwater Resource Estimation System

This guide will help you deploy the INGRES application to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Node.js (v18 or higher)
- npm or yarn

## 🚀 Quick Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit - INGRES application"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/nishchaydev/SIH
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your app

3. **Access your app:**
   - Your app will be available at: `https://nishchaydev.github.io/SIH/`
   - It may take a few minutes for the first deployment

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   cd SIH-INGRES
   npm install
   npm run build
   ```

2. **Deploy using the script:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

## 🔧 Configuration

The app is configured for GitHub Pages with:
- Base path: `/SIH/`
- Build output: `dist/` folder
- Automatic deployment on push to main branch

## 📁 Project Structure

```
SIH/
├── SIH-INGRES/          # Main application
│   ├── src/
│   ├── public/
│   ├── dist/            # Build output (auto-generated)
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
└── deploy.sh            # Deployment script
```

## 🎯 Features Included

✅ **AI-Powered Chatbot** - Multilingual support (English, Hindi, Telugu, Tamil, Bengali, Marathi)
✅ **Advanced Visualizations** - Hydrogeological charts, trend analysis, cross-sections
✅ **Assessment Unit Navigation** - State/District/Block level data browsing
✅ **Interactive Data Explorer** - Real-time groundwater data queries
✅ **Report Generation** - State reports, trend analysis, GIS reports
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **GEC-2015 Methodology** - Following proper groundwater assessment guidelines

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`

### GitHub Pages Not Updating
- Check GitHub Actions tab for deployment status
- Ensure the workflow file is in `.github/workflows/`
- Verify the repository has Pages enabled

### Assets Not Loading
- Check that `base: "/SIH/"` is set in `vite.config.ts`
- Ensure all asset paths are relative

## 📞 Support

For issues or questions:
- Check the GitHub Issues tab
- Review the deployment logs in GitHub Actions
- Ensure all environment variables are set correctly

## 🌟 Demo

Once deployed, your INGRES application will be available at:
**https://nishchaydev.github.io/SIH/**

The application includes:
- Interactive AI chatbot for groundwater queries
- Comprehensive data visualization tools
- Assessment unit navigation system
- Multi-language support for Indian users
- Professional UI following government standards

---

**Note:** This is a hackathon project for Smart India Hackathon 2025, developed by Team Syntax Error.
