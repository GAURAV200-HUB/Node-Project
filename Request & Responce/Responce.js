const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(res)
    res.setHeader('content-type', 'text/html');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<h1>hello world</h1>');
    // res.write('<p>hello Gaurav</p>');

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // res.write(data)
            res.end(data);
        }
    })

    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})