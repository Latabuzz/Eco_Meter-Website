@echo off
REM Quick setup: Add Node.js to PATH and set aliases

REM Set NODE_HOME environment variable
setx NODE_HOME D:\nodejs
setx PATH "%PATH%;D:\nodejs"

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  Node.js Environment Setup Complete!                       ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo NODE_HOME set to: D:\nodejs
echo PATH updated with Node.js
echo.
echo You can now use: node, npm, npx from any terminal
echo.
echo To verify, restart your terminal and run:
echo   node --version
echo   npm --version
echo.
echo To start development server:
echo   cd D:\wenzzz\EcoMeter
echo   npm run dev
echo.
echo Project will be available at: http://localhost:3000
echo.
pause
