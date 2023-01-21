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

  const ChannelWindow = createWindow("channel", {
    width: 400,
    height: 700,
    show: false,
  });


  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
    // await ChannelWindow.loadURL("app://./channel.html");

  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // await ChannelWindow.loadURL(`http://localhost:${port}/channel/`);

    mainWindow.webContents.openDevTools();
  }

  // ipcMain.on("show-channel", () => {
  //   ChannelWindow.show();
  // });

  mainWindow.on('closed', () => {
    mainWindow = undefined!;
  });
})();

app.on('window-all-closed', () => {
  app.quit();
});
