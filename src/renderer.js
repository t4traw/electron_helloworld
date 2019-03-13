const { ipcRenderer } = require('electron')

function submitNum (num) {
  ipcRenderer.send('submitNum', num)
}

ipcRenderer.on('renderOra', (event, args) => {
  newNode = document.createElement('span')
  newNode.classList.add('shake-hard')
  newNode.classList.add('shake-constant')
  newNode.innerText = args
  document.getElementById('app').appendChild(newNode)
})
