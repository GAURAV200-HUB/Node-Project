const fs = require('fs')

// Work on Directories
if(!fs.existsSync('./docs/demo')) {
    fs.mkdir('./docs/demo', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Folder created successfully')
    })
} else {
    fs.rmdir('./docs/demo', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder deleted successfully')
    })
}