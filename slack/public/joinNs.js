const joinNs = (endpoint) => {
  console.log('JOINED', endpoint)
  // join namespace
  nsSocket = io(`http://localhost:9400${endpoint}`)
  nsSocket.on('nsRoomload', (nsRooms) => {
    let roomlist = document.querySelector('.room-list')
    roomlist.innerHTML = ''
    nsRooms.forEach((room) => {
      let glpyh = room.privateRoom ? 'lock' : 'globe'

      roomlist.innerHTML += `<li class='room'>
      <span class="glyphicon glyphicon-${glpyh}"></span>${room.roomTitle}
    </li>`
    })
    // click lister
    let roomNodes = document.getElementsByClassName('room')
    Array.from(roomNodes).forEach((elem) => {
      elem.addEventListener('click', (e) => {
        console.log('clicked on', e.target.innerText)
      })
    })
    const topRoom = document.querySelector('.room')
    const topRoomName = topRoom.innerText
    joinRoom(topRoomName)
  })

  nsSocket.on('messageFromClient', (messageFromClient) => {
    console.log(messageFromClient)
    document.querySelector(
      '#message'
    ).innerHTML += `<li>${messageFromClient.text}</li>`
  })

  document.querySelector('.message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newMessage = document.querySelector('#user-message').value
    nsSocket.emit('newMessageToServer', { text: newMessage })
  })
}
