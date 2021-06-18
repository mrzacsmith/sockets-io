const express = require('express')
const socketio = require('socket.io')
const app = express()

app.use(express.static(__dirname + '/public'))

const PORT = 9200

const expressServer = app.listen(PORT, () =>
  console.log(`chat server is running ${PORT}`)
)

const io = socketio(expressServer)
io.on('connection', (client) => {
  client.emit('messageFromServer', { data: 'This is from the server' })
  client.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient)
  })
  client.join('level1')
  io.to('level1').emit(
    'joined',
    `${client.id} says i have joined the level one room!`
  )
})
io.of('admin').on('connection', (client) => {
  console.log('someone connected to the adming namespage')
  io.of('/admin').emit('welcome', 'welcome to the admin channel')
})
