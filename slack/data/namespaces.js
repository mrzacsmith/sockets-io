// Bring in the room class
const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

// Set up the namespaces
let namespaces = []
let codeShock = new Namespace(
  0,
  'CodeShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1616228921/ICON_PNG_bvxthw.png',
  '/codeshock'
)
let teamShock = new Namespace(
  1,
  'TeamShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1617414274/flame-1235_mqplbp.png',
  '/teamshock'
)
let nodeShock = new Namespace(
  2,
  'NodeShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1617682725/vector-creator_8_zcibrs.png',
  '/nodeshock'
)

namespaces.push(codeShock, teamShock, nodeShock)

// Make the main room and add it to rooms. it will ALWAYS be 0
codeShock.addRoom(new Room(0, 'New Projects', 'CodeShock'))
codeShock.addRoom(new Room(1, 'General', 'CodeShock'))
codeShock.addRoom(new Room(2, 'Other', 'CodeShock'))

teamShock.addRoom(new Room(0, 'Development', 'TeamShock'))
teamShock.addRoom(new Room(1, 'UI', 'TeamShock'))
teamShock.addRoom(new Room(2, 'General', 'TeamShock'))
teamShock.addRoom(new Room(3, 'Accounts', 'TeamShock'))

nodeShock.addRoom(new Room(0, 'Node', 'NodeShock'))
nodeShock.addRoom(new Room(1, 'Express', 'NodeShock'))
nodeShock.addRoom(new Room(2, 'Socket.io', 'NodeShock'))
nodeShock.addRoom(new Room(3, 'Mongo', 'NodeShock'))
nodeShock.addRoom(new Room(4, 'Redis', 'NodeShock'))

module.exports = namespaces
