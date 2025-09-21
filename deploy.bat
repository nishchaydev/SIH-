@echo off
echo 🚀 SIH-INGRES Master Deploy Script
echo =====================================
echo.

echo 📦 Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build completed successfully!
echo.

echo 📝 Adding changes to git...
git add .
if %errorlevel% neq 0 (
    echo ❌ Git add failed!
    pause
    exit /b 1
)
echo ✅ Changes added to staging area!
echo.

echo 💾 Committing changes...
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%DD%/%MM%/%YYYY% %HH%:%Min%:%Sec%"

git commit -m "🚀 Deploy to GitHub Pages - %timestamp%"
if %errorlevel% neq 0 (
    echo ❌ Git commit failed!
    pause
    exit /b 1
)
echo ✅ Changes committed successfully!
echo.

echo 🌐 Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Git push failed!
    pause
    exit /b 1
)
echo ✅ Pushed to GitHub successfully!
echo.

echo 🎉 DEPLOYMENT COMPLETE!
echo ========================
echo 📱 Your site will be live at:
echo 🔗 https://nishchaydev.github.io/SIH-/
echo.
echo ⏱️  GitHub Actions will deploy your changes in 2-3 minutes.
echo 🔄 You can check the deployment status in the Actions tab of your repository.
echo.
pause
