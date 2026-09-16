const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow(){

    const MainWindow = new BrowserWindow({

        title:'Pomorodo Desktop',
        width: 450,
        height: 500,
    });
}