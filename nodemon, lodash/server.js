const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 10)
    console.log(num)

    const greet = _.once(() => {
        console.log('Hello Gaurav')
    })

    greet()
    greet()

    // node

    res.setHeader('content-type', 'text/html');     // in this setHeader defined for file type

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about')     // in this setHeader defined for redirection/location
            res.end()
            break;

        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})