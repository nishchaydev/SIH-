#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 SIH-INGRES Master Deploy Script');
console.log('=====================================\n');

try {
  // Step 1: Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');

  // Step 2: Check if there are changes to commit
  console.log('🔍 Checking for changes...');
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!gitStatus.trim()) {
      console.log('ℹ️  No changes to commit. Everything is up to date!');
      process.exit(0);
    }
  } catch (error) {
    console.log('⚠️  Git status check failed, proceeding with commit...');
  }

  // Step 3: Add all changes
  console.log('📝 Adding changes to git...');
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Changes added to staging area!\n');

  // Step 4: Commit with timestamp
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const commitMessage = `🚀 Deploy to GitHub Pages - ${timestamp}`;
  console.log('💾 Committing changes...');
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  console.log('✅ Changes committed successfully!\n');

  // Step 5: Push to GitHub
  console.log('🌐 Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Pushed to GitHub successfully!\n');

  // Step 6: Success message
  console.log('🎉 DEPLOYMENT COMPLETE!');
  console.log('========================');
  console.log('📱 Your site will be live at:');
  console.log('🔗 https://nishchaydev.github.io/SIH-INGRES/');
  console.log('\n⏱️  GitHub Actions will deploy your changes in 2-3 minutes.');
  console.log('🔄 You can check the deployment status in the Actions tab of your repository.\n');

} catch (error) {
  console.error('❌ DEPLOYMENT FAILED!');
  console.error('====================');
  console.error('Error:', error.message);
  console.error('\n🔧 Troubleshooting:');
  console.error('1. Make sure you have git configured');
  console.error('2. Check if you have push permissions to the repository');
  console.error('3. Ensure you are on the main branch');
  console.error('4. Try running: git status');
  process.exit(1);
}
