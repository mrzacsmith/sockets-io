const joinRoom = (roomName) => {
  nsSocket.emit('joinRoom', roomName, (newNumberOfMembers) => {
    // update the room member total after joining
    document.querySelector(
      '.curr-room-num-users'
    ).innerHTML = `${newNumberOfMembers} <span class="glyphicon glyphicon-user"></span>`
  })
}
