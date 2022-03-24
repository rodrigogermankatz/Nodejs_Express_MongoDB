const fileSystem = require('fs');

const hello = "hello world";
console.log(hello);

//sychronous version of file reading
const inputText = fileSystem.readFileSync('./txt/input.txt', 'utf-8'); //if i don't pass the second param it will be type buffer
console.log(inputText);

//sychronous version of file writing
const textOutput = `el inputText --> ${inputText} <-- fue creado el ${Date.now()}`;
fileSystem.writeFileSync('./txt/output.txt',textOutput);
console.log(`File Written!`);

/**
 * DOCUMENTATION:
 * https://nodejs.org/en/docs/
 * 
 * Execute using node index.js
 * 
 * **/ 