const fs = require('fs');

// fs.readFile('./docs/demo.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//    }
//    console.log(data.toString());
// })

const readStream = fs.createReadStream('./docs/demo.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/demo2.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//     console.log('------ New Chunk ------')
//     console.log(chunk)

//     writeStream.write('\n' + 'New CHUNK' + '\n')
//     writeStream.write(chunk)
// })

// Piping
readStream.pipe(writeStream)