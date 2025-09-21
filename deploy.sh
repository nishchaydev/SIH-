#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Add all files to git
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

# Deploy to gh-pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete! Your site should be available at:"
echo "https://yourusername.github.io/SIH-INGRES/"