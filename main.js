const { app, BrowserWindow } = require('electron')

console.log(app)


console.log(app, BrowserWindow)

const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 500
    })
  
    win.loadFile('main.html')
  }

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})