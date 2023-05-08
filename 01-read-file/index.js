const fs = require('fs');

/* fs.readFile('./01-read-file/text.txt', 'utf-8', (err, data) => {
    console.log(data);
}); */

var stream = new fs.ReadStream('./01-read-file/text.txt', {encoding: 'utf-8'});
 
stream.on('readable', function(){
    var data = stream.read();
    if(data != null) {
        console.log(data);
    }
});
