const modify = require('./modify.js')
const readline = require('readline')

const rl = readline.createInterface(process.stdin, {})

rl.on('line', (line) => {
  console.log(JSON.stringify(modify(JSON.parse(line))))
})

