#!/bin/bash

echo "🚀 SIH-INGRES GitHub Pages Setup"
echo "================================="
echo

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    echo "✅ Git repository initialized!"
    echo
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository as origin:"
    echo "   git remote add origin https://github.com/nishchaydev/SIH-INGRES.git"
    echo
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed!"
echo

# Build project
echo "🔨 Building project..."
npm run build
echo "✅ Project built successfully!"
echo

# Make deploy script executable
chmod +x deploy.sh
chmod +x scripts/deploy.js
echo "✅ Deploy scripts made executable!"
echo

echo "🎉 SETUP COMPLETE!"
echo "=================="
echo
echo "📋 Available commands:"
echo "   npm run master    - Master deploy command (build + commit + push)"
echo "   npm run deploy    - Same as master"
echo "   npm run git       - Simple git deploy"
echo "   npm run build     - Build only"
echo "   npm run dev       - Development server"
echo
echo "🚀 To deploy your site:"
echo "   npm run master"
echo
echo "🌐 Your site will be live at:"
echo "   https://nishchaydev.github.io/SIH-INGRES/"
echo