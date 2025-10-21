@echo off
echo ========================================
echo EcoMeter - Node.js Installation Helper
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js sudah terinstall
    node --version
    npm --version
    echo.
    goto :install_deps
) else (
    echo [!] Node.js belum terinstall
    echo.
    echo Silakan install Node.js terlebih dahulu:
    echo 1. Buka: https://nodejs.org/
    echo 2. Download LTS version
    echo 3. Install dengan pengaturan default
    echo 4. Restart terminal ini
    echo 5. Jalankan script ini lagi
    echo.
    echo Membuka halaman download Node.js...
    start https://nodejs.org/
    pause
    exit /b 1
)

:install_deps
echo ========================================
echo Installing Dependencies...
echo ========================================
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Gagal install dependencies
    echo Coba hapus node_modules dan package-lock.json
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Project siap dijalankan!
echo.
echo Untuk menjalankan development server:
echo   npm run dev
echo.
echo Atau jalankan: start-dev.bat
echo.
pause
