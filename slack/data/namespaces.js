// Bring in the room class
const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

// Set up the namespaces
let namespaces = []
let codeShockNs = new Namespace(
  0,
  'CodeShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1616228921/ICON_PNG_bvxthw.png',
  '/codeshock'
)
let teamShockNs = new Namespace(
  1,
  'TeamShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1617414274/flame-1235_mqplbp.png',
  '/teamshock'
)
let nodeShockNs = new Namespace(
  2,
  'NodeShock',
  'https://res.cloudinary.com/codeshock/image/upload/v1617682725/vector-creator_8_zcibrs.png',
  '/nodeshock'
)

// Make the main room and add it to rooms. it will ALWAYS be 0
codeShockNs.addRoom(new Room(0, 'New Projects', 'CodeShock'))
codeShockNs.addRoom(new Room(1, 'General', 'CodeShock'))
codeShockNs.addRoom(new Room(2, 'Other', 'CodeShock'))

teamShockNs.addRoom(new Room(0, 'Development', 'TeamShock'))
teamShockNs.addRoom(new Room(1, 'UI', 'TeamShock'))
teamShockNs.addRoom(new Room(2, 'General', 'TeamShock'))
teamShockNs.addRoom(new Room(3, 'Accounts', 'TeamShock'))

nodeShockNs.addRoom(new Room(0, 'Node', 'NodeShock'))
nodeShockNs.addRoom(new Room(1, 'Express', 'NodeShock'))
nodeShockNs.addRoom(new Room(2, 'Socket.io', 'NodeShock'))
nodeShockNs.addRoom(new Room(3, 'Mongo', 'NodeShock'))
nodeShockNs.addRoom(new Room(4, 'Redis', 'NodeShock'))

namespaces.push(codeShockNs, teamShockNs, nodeShockNs)

module.exports = namespaces
