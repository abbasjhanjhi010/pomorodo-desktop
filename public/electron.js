const { app, BrowserWindow } = require('electron');
const url =  require('url');
const path = require('path');
const { start } = require('repl');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title : "pomorod-desktop",
        width: 300,
        height: 345,
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
    });

    mainWindow.loadURL(startUrl);   // will load the app in electron windwo 
}


app.whenReady().then(createMainWindow)