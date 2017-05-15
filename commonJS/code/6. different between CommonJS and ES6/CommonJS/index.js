// require.js
const a = require('./module')
console.log('before: a', a)

setTimeout(function () {
  console.log('after: a', a)
}, 2000)