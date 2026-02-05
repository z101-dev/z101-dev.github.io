// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 800,
        icon: path.join(__dirname, 'icon.ico'),
        frame: false,
        backgroundColor: '#ffc0cb',
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);