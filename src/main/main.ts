import * as path from 'path';
import * as url from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserWindow, app, ipcMain } from 'electron';

import ping from 'ping';

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    title: 'Pinger tool',
    height: 600,
    width: 800,
    webPreferences: {
      webSecurity: false,
      enableRemoteModule: true,
      nodeIntegration: true,
      devTools: process.env.NODE_ENV !== 'production',
    },
  });

  mainWindow
    .loadURL(
      url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true,
      })
    )
    .finally(() => {
      /* no action */
    });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('ping-req', (event, arg) => {
  ping.sys.probe(arg, function (isAlive) {
    var msg = isAlive ? 'host ' + arg + ' is alive' : 'host ' + arg + ' is dead';
    event.reply('ping-res', JSON.stringify({ host: arg, isAlive }));
  });
});
