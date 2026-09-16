const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { start } = require('repl');

function createMainWindow(){

    const MainWindow = new BrowserWindow({

        title:'Pomorodo Desktop',
        width: 450,
        height: 500,
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'),    // react app connection
        protocol: 'file',
        slashes: true,
    })

    mainWindow.loadURL(startUrl);    // loads app in the electron window
}

app.whenReady().then(createMainWindow)