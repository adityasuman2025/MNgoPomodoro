const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: __dirname + "/src/assets/logo512.ico",
    });
    mainWindow.loadFile('src/index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});