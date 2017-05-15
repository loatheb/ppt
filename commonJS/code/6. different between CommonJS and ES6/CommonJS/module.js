// module.js
var a = 1

module.exports = a

setTimeout(function () {
  a = 2
}, 1000)

