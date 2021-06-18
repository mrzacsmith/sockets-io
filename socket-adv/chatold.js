const express = require('express')
const socketio = require('socket.io')
const app = express()

app.use(express.static(__dirname + '/public'))
const PORT = 9200
const expressServer = app.listen(PORT, () =>
  console.log(`chat server is running ${PORT}`)
)

const io = socketio(expressServer)
io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'This is from the server' })
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient)
  })
  socket.on('newMessageToServer', (msg) => {
    console.log(msg)
    io.emit('messageToClients', { text: msg.text })
  })
})
