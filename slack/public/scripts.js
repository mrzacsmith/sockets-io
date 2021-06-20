const socket = io('http://localhost:9400')

socket.on('messageFromServer', (dataFromServer) => {
  console.log(dataFromServer)
  socket.emit('messageToServer', { data: 'This is from the socket/client' })
})

// receives the namespace array, and then dynamically updates the namespaces with img and endpoint
socket.on('nslist', (nsData) => {
  console.log('the list of namespaces has arrived!!')
  let namespacesDiv = document.querySelector('.namespaces')
  namespacesDiv.innerHTML = ''
  nsData.forEach((ns) => {
    namespacesDiv.innerHTML += `<div class='namespace' ns=${ns.endpoint} ><img src=${ns.img} /></div>`
  })

  Array.from(document.getElementsByClassName('namespace')).forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const nsEndpoint = elem.getAttribute('ns')
      console.log(nsEndpoint)
    })
  })

  // join namespace
  const nsSocket = io('http://localhost:9400/codeshock')
  nsSocket.on('nsRoomload', (nsRooms) => {
    let roomlist = document.querySelector('.room-list')
    roomlist.innerHTML = ''
    nsRooms.forEach((room) => {
      roomlist.innerHTML += `<li>${room.roomTitle}</li>`
    })
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
