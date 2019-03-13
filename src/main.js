const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url')
const path = require('path')

let appWindow

function initApp () {
  appWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
}

app.on('ready', initApp)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (appWindow === null) {
    initApp()
  }
})

function sleep (milsec) {
  return new Promise(resolve => setTimeout(resolve, milsec))
}

async function renderOra (args) {
  for (i = 0; i < args; i++) {
    appWindow.webContents.send('renderOra', 'オラ')
    await sleep(100)
  }
}

ipcMain.on('submitNum', function (event, args) {
  renderOra(args)
})
