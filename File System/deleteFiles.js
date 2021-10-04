const fs = require('fs');

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted successfully')
    });    
} else {
    console.log('file not found')
}