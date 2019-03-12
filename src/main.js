const {app, BrowserWindow} = require('electron')
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
