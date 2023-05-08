const fs = require('fs');
const path = require('path');

const bigCss = './05-merge-styles/project-dist/bundle.css';

fs.writeFile(bigCss, '', () => {});


fs.readdir('./05-merge-styles/styles', (err, data) => {
    data.forEach(style => {
        fs.readFile('./05-merge-styles/styles/' + style, (err, read) => {
            if(path.parse(style).ext == '.css') {
                fs.appendFile(bigCss, read + '\n', ()=>{});
            }
        });
    });
});