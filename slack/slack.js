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

io.on('connect', (socket) => {
  // console.log(socket.handshake)

  let nsData = namespaces.map((ns) => {
    return {
      img: ns.img,
      endpoint: ns.endpoint,
    }
  })
  // console.log(nsData)
  socket.emit('nslist', nsData)
})

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on('connection', (socket) => {
    console.log(`${socket.id} has joined ${namespace.endpoint}`)
  })
})

// io.of('admin').on('connection', (client) => {
//   console.log('someone connected to the adming namespage')
//   io.of('/admin').emit('welcome', 'welcome to the admin channel')
// })
