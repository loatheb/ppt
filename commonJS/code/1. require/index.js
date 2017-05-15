/*

 require module exports __dirname __pathname

*/

// core module
const process = require('process')

console.log(process.memoryUsage())

const jquery = require('jquery')

console.log(jquery)

// custome module
const custome = require('./module')

console.log(custome)