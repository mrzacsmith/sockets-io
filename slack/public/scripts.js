const client = io('http://localhost:9200')
const socket2 = io('http://localhost:9200/admin')

client.on('messageFromServer', (dataFromServer) => {
  console.log(dataFromServer)
  client.emit('messageToServer', { data: 'This is from the client' })
})

client.on('joined', (msg) => {
  console.log(msg)
})

socket2.on('welcome', (dataFromServer) => {
  console.log(dataFromServer)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const newMessage = document.querySelector('#user-message').value
  client.emit('newMessageToServer', { text: newMessage })
})
