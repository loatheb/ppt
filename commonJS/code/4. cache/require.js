// require.js
const a = require('./module')
const b = require('./module')

const c = new Date()
const d = new Date()

console.log(a === b) // true
console.log(c === d) // false