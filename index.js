const fileSystem = require('fs');

//BLOCKING - SYCHRONOUS WAY

//sychronous version of file reading
const inputText = fileSystem.readFileSync('./txt/input.txt', 'utf-8'); //if i don't pass the second param it will be type buffer
console.log(inputText);

//sychronous version of file writing
const textOutput = `el inputText --> ${inputText} <-- fue creado el ${Date.now()}`;
fileSystem.writeFileSync('./txt/output.txt',textOutput);
console.log(`File Written!`);

//Blocking and Non-Blocking: Asynchronous Nature of Node.js
/**
 * sychronous code is also known as blocking
 * because the code is being executed line by line 
 * so the following line will be executed after the first line finishes
 * this is a con when trying fast processes
 */


//NON-BLOCKING - ASYCHRONOUS WAY
fileSystem.readFile('./txt/start.txt', 'utf-8', (error, data)=>{
    //the file will be read in the background meanwhile the rest of the code continues to be executed
    console.log(data);   
});
console.log(`will read this!`);



/**
 * asychronous code is also known as non blocking
 * 
 */


/**
 * DOCUMENTATION:
 * https://nodejs.org/en/docs/
 * 
 * Execute using node index.js
 * 
 * **/ 