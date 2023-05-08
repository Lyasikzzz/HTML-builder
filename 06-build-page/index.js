const fs = require('fs');
const path = require('path');

const pathNewFolder = './06-build-page/project-dist',
      pathComponents = './06-build-page/components',
      pathStyles = './06-build-page/styles';


fs.mkdir(pathNewFolder, { recursive: true }, (err)=>{

    fs.readFile('./06-build-page/template.html', 'utf-8', (err, text) => {
        fs.readdir(pathComponents, (err, data) => {
            let htmlText = text;
            for (let i = 0; i < data.length; i++) {
                fs.readFile(`${pathComponents}/${data[i]}`, 'utf-8', (err, textHtmlFile) => {
                    htmlText = htmlText.replace(`{{${path.parse(data[i]).name}}}`, textHtmlFile);
                    if (i === data.length - 1) {
                        fs.writeFile(`${pathNewFolder}/index.html`, htmlText, (err)=>{if (err) {console.log(err)}});
                    }
                });
            }
        });
    });

    fs.writeFile(`${pathNewFolder}/style.css`, '', (err)=>{
        fs.readdir(pathStyles, (err, cssFiles) => {
            cssFiles.forEach(style => {
                fs.readFile('./06-build-page/styles/' + style, (err, read) => {
                    if(path.parse(style).ext == '.css') {
                        fs.appendFile(`${pathNewFolder}/style.css`, read + '\n', ()=>{});
                    }
                });
            });
        });
    });


    fs.mkdir(`${pathNewFolder}/assets`, { recursive: true }, (err) => {
        fs.readdir('./06-build-page/assets', (err, data) => {
            data.forEach(folder => {
                fs.readdir(`./06-build-page/assets/${folder}`, (err, files) => {
                    fs.mkdir(`${pathNewFolder}/assets/${folder}`, { recursive: true }, (err) => {
                        files.forEach(file => {
                            fs.copyFile(`./06-build-page/assets/${folder}/${file}`, `${pathNewFolder}/assets/${folder}/${file}`, (err) => {if (err) {console.log(err)}});
                        });
                    });
                });
            });
        });
    });

});






