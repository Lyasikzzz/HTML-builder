const fs = require('fs');


const copyDir = function() {
    fs.readdir('./04-copy-directory', (err, data) => {
/*         console.log(data.includes('files-copy')); */
        if (data.includes('files-copy')) {
            fs.readdir('./04-copy-directory/files-copy', (err, rmFiles) => {
                if (rmFiles.length !== 0) {
                    rmFiles.forEach(file => {
                        fs.unlink(`./04-copy-directory/files-copy/${file}`, (err) => {if (err) {console.log(err)}});
                    });
                    copyDir();
                } else if (rmFiles.length == 0) {
                    fs.rmdir('./04-copy-directory/files-copy', (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            copyDir();
                        }
                    });
                } else {
                    copyDir();
                }
            });
        } else {
            fs.mkdir('./04-copy-directory/files-copy', { recursive: true }, (err) => {
                fs.readdir('./04-copy-directory/files', (err, data) => {
                    data.forEach(file => {
                        fs.copyFile('./04-copy-directory/files/' + file, './04-copy-directory/files-copy/' + file, (err) => {if (err) {console.log(err)}});
                    });
                });
            });
        }
    });
};


copyDir();

