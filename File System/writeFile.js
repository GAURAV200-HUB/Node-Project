const fs = require('fs')

// writing files
fs.writeFile('./docs/gk.txt', 'Hello, GK', () => {
    console.log('File is written successfully')
})

fs.writeFile('./docs/gaurav.txt', 'Hello, Gaurav', () => {
    console.log('File is written successfully')
})