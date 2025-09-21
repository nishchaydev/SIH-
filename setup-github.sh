#!/bin/bash

# Setup script for GitHub Pages deployment
echo "🔧 Setting up INGRES for GitHub Pages deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the SIH-INGRES directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Next steps:"
    echo "1. Initialize git repository (if not already done):"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit - INGRES application'"
    echo ""
    echo "2. Add your GitHub repository as remote:"
    echo "   git remote add origin https://github.com/nishchaydev/SIH.git"
    echo ""
    echo "3. Push to GitHub:"
    echo "   git push -u origin main"
    echo ""
    echo "4. Enable GitHub Pages:"
    echo "   - Go to https://github.com/nishchaydev/SIH/settings/pages"
    echo "   - Select 'GitHub Actions' as source"
    echo "   - Your app will be available at: https://nishchaydev.github.io/SIH/"
    echo ""
    echo "🎉 Your INGRES application is ready for deployment!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

