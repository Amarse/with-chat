import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';



const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  let mainWindow = createWindow('main', {
    width: 500,
    height: 700,
  });




  if (isProd) {
    await mainWindow.loadURL('app://./home.html');

  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);

    mainWindow.webContents.openDevTools();
  }


  mainWindow.on('closed', () => {
    mainWindow = undefined!;
  });
})();

app.on('window-all-closed', () => {
  app.quit();
});
