const fs = require('fs');
const path = require('path');

const folder = './03-files-in-folder/secret-folder';

fs.readdir(folder, (err, data) => {
    console.log('\n*FILES:*\n');
    data.forEach(file => {
        fs.readdir(folder + '/' + file, (err, isFolder) => {
            if (typeof isFolder !== 'object') {
                fs.stat(folder + '/' + file, (err, stats)=> {
                    console.log(`- ${path.parse(file).name}: ext - [${path.parse(file).ext}], size - [${stats.size}B]`);
                });
            }
        });
    });
/*     console.log(fs.readdir(`./03-files-in-folder/secret-folder/${data[0]}`, (err, data) => {console.log(data)})); */
});


/* let fileStats = fs.stat(`./03-files-in-folder/secret-folder/${file}`, (ooo)=> {console.log(ooo)});

fs.readdir(`./03-files-in-folder/secret-folder/${file}`, (err, dataE) => {
    if (typeof dataE !== 'object') {
        console.log(`file: ${file}, ext: ${path.extname(file)}, size: ${fileStats.size} B`);
    }
}); */