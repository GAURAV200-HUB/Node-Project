const express = require('express');

// express app
const app = express()

// listining
app.listen(3000)

//sending files
app.get('/', (req, res) => {
    // res.send('<h1>This is a Home Page</h1>')
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<h1>This is a About Page</h1>')
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirect
app.get('/about-us', (req, res) => {
    app.redirect('./about')
})

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})