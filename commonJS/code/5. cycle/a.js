// a.js
module.exports = '[a]: this is info exports from a before loading b'

const b = require('./b')

console.log(`[a log]: ${b}`)

module.exports = '[a]: this is info exports from a after loading b'