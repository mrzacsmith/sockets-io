const http = require('http')
const websocket = require('ws')

const server = http.createServer((req, res) => {
  res.end('I am connected')
})

const wss = new websocket.Server({ server })

wss.on('headers', (headers, rec) => {
  console.log(headers)
})

wss.on('connection', (ws, req) => {
  ws.send('welcome to web socket server')
  ws.on('message', (msg) => {
    console.log(msg)
  })
})

server.listen(8000, () => console.log('native server is listening'))
