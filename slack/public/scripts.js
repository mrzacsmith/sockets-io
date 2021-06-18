const socket2 = io('http://localhost:9400/codeshock')
const socket3 = io('http://localhost:9400/teamshock')
const socket4 = io('http://localhost:9400/nodeshock')

socket.on('messageFromServer', (dataFromServer) => {
  console.log(dataFromServer)
  socket.emit('messageToServer', { data: 'This is from the socket/client' })
})

socket.on('joined', (msg) => {
  console.log(msg)
})

socket2.on('welcome', (dataFromServer) => {
  console.log(dataFromServer)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const newMessage = document.querySelector('#user-message').value
  socket.emit('newMessageToServer', { text: newMessage })
})
