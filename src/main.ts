import {app, BrowserWindow} from 'electron';
import * as path from 'path';

let win: BrowserWindow|null = null;

const createWindow = async () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.on('closed', () => { win = null });

  await win.loadFile(path.resolve('dist', 'index.html'));

  if (!app.isPackaged) {
    win.webContents.openDevTools();
  }
};

app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
