const socket = io('http://localhost:9200')
const socket2 = io('http://localhost:9200/admin')

socket.on('connect', () => {
  console.log(socket.id)
})
socket.on('messageFromServer', (dataFromServer) => {
  console.log(dataFromServer)
  socket.emit('messageToServer', { data: 'This is from the client' })
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const newMessage = document.querySelector('#user-message').value
  socket.emit('newMessageToServer', { text: newMessage })
})