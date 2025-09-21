@echo off
echo 🚀 SIH-INGRES GitHub Pages Setup
echo =================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing git repository...
    git init
    echo ✅ Git repository initialized!
    echo.
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)
echo ✅ Dependencies installed!
echo.

REM Build project
echo 🔨 Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Project built successfully!
echo.

echo 🎉 SETUP COMPLETE!
echo ==================
echo.
echo 📋 Available commands:
echo    npm run master    - Master deploy command (build + commit + push)
echo    npm run deploy    - Same as master
echo    npm run git       - Simple git deploy
echo    npm run build     - Build only
echo    npm run dev       - Development server
echo.
echo 🚀 To deploy your site:
echo    npm run master
echo.
echo 🌐 Your site will be live at:
echo    https://nishchaydev.github.io/SIH-INGRES/
echo.
pause
