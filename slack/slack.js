const express = require('express')
const socketio = require('socket.io')
const app = express()

let namespaces = require('./data/namespaces')
// console.log(namespaces[0])

app.use(express.static(__dirname + '/public'))

const PORT = 9400

const expressServer = app.listen(PORT, () =>
  console.log(`chat server is running ${PORT}`)
)

const io = socketio(expressServer)

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on('connection', (socket) => {
    console.log(`${socket.id} has joined ${namespace.endpoint}`)
  })
})

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
