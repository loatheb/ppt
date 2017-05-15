// b.js
module.exports = '[b]: this is something exports from b before loading a'

const a = require('./a')

console.log(`[b log]: ${a}`)

module.exports = '[b]: this is something exports from b after loading a'