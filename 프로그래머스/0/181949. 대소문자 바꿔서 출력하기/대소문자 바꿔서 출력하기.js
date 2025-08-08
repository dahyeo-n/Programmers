const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line) => {
    input = [...line];
}).on('close', () => {
    console.log(
    input.map((char) => (
        /[a-z]/.test(char)
        ? char.toUpperCase()
        : char.toLowerCase())).join(''),
  );
});