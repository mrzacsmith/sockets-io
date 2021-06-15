const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers)
    res.end()
    return
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    res.writeHead(200, headers)
    res.end('Hello World')
    return
  }

  res.writeHead(405, headers)
  res.end(`${req.method} is not allowed for the request.`)
})

const io = socketio(server)

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'welcome to websocket server')
  socket.on('message', (msg) => console.log(msg))
})

server.listen(8000, () => console.log('socket server is running'))
