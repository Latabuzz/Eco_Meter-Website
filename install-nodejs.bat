@echo off
REM Installation script for Node.js

echo.
echo ╔════════════════════════════════════════════════╗
echo ║  Installing Node.js LTS v20.10.0               ║
echo ╚════════════════════════════════════════════════╝
echo.

REM Create nodejs directory
if not exist D:\nodejs mkdir D:\nodejs
cd D:\nodejs

REM Download Node.js portable ZIP
echo Downloading Node.js...
powershell -NoProfile -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.10.0/node-v20.10.0-win-x64.zip' -OutFile 'node-v20.10.0.zip' -UseBasicParsing"

if not exist node-v20.10.0.zip (
    echo ERROR: Failed to download Node.js
    pause
    exit /b 1
)

echo Node.js downloaded successfully!
echo.

REM Extract ZIP
echo Extracting Node.js...
powershell -NoProfile -Command "Expand-Archive -Path 'node-v20.10.0.zip' -DestinationPath '.' -Force"

REM Rename extracted folder
if exist node-v20.10.0-win-x64 (
    ren node-v20.10.0-win-x64 bin
    echo Node.js extracted successfully!
) else (
    echo ERROR: Failed to extract Node.js
    pause
    exit /b 1
)

REM Add to PATH
echo.
echo Adding Node.js to system PATH...
setx PATH "%PATH%;D:\nodejs\bin"

REM Verify installation
echo.
echo Verifying installation...
D:\nodejs\bin\node --version
D:\nodejs\bin\npm --version

echo.
echo ╔════════════════════════════════════════════════╗
echo ║  Node.js installation complete!                ║
echo ║  Please restart your terminal                  ║
echo ╚════════════════════════════════════════════════╝
echo.

pause
