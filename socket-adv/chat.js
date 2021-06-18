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
  io.of('admin').on('connection', (socket) => {
    console.log('someone connected to the adming namespage')
    io.of('/admin'.emit('welcome', 'welcoome to the admin channel'))
  })
})
