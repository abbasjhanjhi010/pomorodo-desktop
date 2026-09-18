const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const url = require('url');
const path = require('path');

Menu.setApplicationMenu(null);

function createMainWindow() {

    const mainWindow = new BrowserWindow({
        title: 'Pomorodo Desktop',
        width: 375,
        height: 435,
        frame: false,
        resizable: false,
        backgroundColor: '#fdf3d7',
        icon: path.join(__dirname, 'icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
        },
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../dist/index.html'),
        protocol: 'file:',
        slashes: true,
    });

    mainWindow.loadURL(startUrl);

    // Waits for close app
    ipcMain.on('close-app', () => {
        app.quit();
    });
}

app.whenReady().then(createMainWindow);