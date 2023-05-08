const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
fs.writeFile('./02-write-file/text.txt', '', () => {});
console.log('Введите --help для просмотра команд');

function askQuestion() {
    rl.question('Введите текст: ', (answer) => {
        if (answer.toLowerCase() === 'exit') {
            console.log('До свидания!');
            rl.close();
        } else if (answer.toLowerCase() === '--return') {
            fs.appendFile('./02-write-file/text.txt', '\n', ()=>{});
            askQuestion();
        } else if (answer.toLowerCase() === '--help') {
            console.log('\n"--return" - переход на новую строку\n"exit" - выход из программы\n');
            askQuestion();
        } else {
            fs.appendFile('./02-write-file/text.txt', answer, ()=>{});
            askQuestion();
        }
    });
}
  


askQuestion();
  
rl.on('SIGINT', () => {
    console.log('До свидания!');
    rl.close();
});