@echo off
REM EcoMeter - Quick Start Script (Laragon Version)
echo ========================================
echo EcoMeter Development Server
echo ========================================
echo.

REM Set Node.js PATH from Laragon
set PATH=D:\laragon\bin\node.js;%PATH%

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [!] Dependencies belum terinstall
    echo Menjalankan npm install...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Gagal install dependencies
        pause
        exit /b 1
    )
    echo.
)

echo Starting development server...
echo.
echo App akan buka di: http://localhost:3000
echo.
echo Press Ctrl+C untuk stop server
echo.
call npm run dev
