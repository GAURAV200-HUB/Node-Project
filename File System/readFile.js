const fs = require('fs');

// reading files
fs.readFile('./docs/gk.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString())
})

fs.readFile('./docs/lorem.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString())
})

console.log('enter first')