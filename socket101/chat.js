const express = require('express')
const socketio = require('socket.io')
const app = express()

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(9200, () =>
  console.log('chat server is running')
)

const io = socketio(expressServer)
io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'This is from the server' })
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient)
  })
})
