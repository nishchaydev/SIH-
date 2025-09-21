#!/bin/bash

# GitHub Pages Deployment Script for INGRES
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add, commit and push changes
    echo "📝 Committing changes..."
    git add .
    git commit -m "Deploy INGRES to GitHub Pages - $(date)"
    
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment initiated! Check GitHub Actions for progress."
    echo "🌐 Your app will be available at: https://nishchaydev.github.io/SIH/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
