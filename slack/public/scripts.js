const socket = io('http://localhost:9400')

socket.on('messageFromServer', (dataFromServer) => {
  console.log(dataFromServer)
  socket.emit('messageToServer', { data: 'This is from the socket/client' })
})

socket.on('nslist', (nsData) => {
  console.log('the list of namespaces has arrived!!')
  let namespacesDiv = document.querySelector('.namespaces')
  namespacesDiv.innerHTML = ''
  nsData.forEach((ns) => {
    namespacesDiv.innerHTML += `<div class='namespace'><img src=${ns.img} /></div>`
  })
})

// document.querySelector('#message-form').addEventListener('submit', (e) => {
//   e.preventDefault()
//   const newMessage = document.querySelector('#user-message').value
//   socket.emit('newMessageToServer', { text: newMessage })
// })

socket.on('messageFromClient', (messageFromClient) => {
  console.log(messageFromClient)
  document.querySelector(
    '#message'
  ).innerHTML += `<li>${messageFromClient.text}</li>`
})
