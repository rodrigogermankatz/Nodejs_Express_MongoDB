const fileSystem = require('fs');
const http = require('http');
const url = require('url');

/*----------------------------------------
                FILE SYSTEM

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


/*NON-BLOCKING - ASYCHRONOUS WAY
fileSystem.readFile('./txt/start.txt', 'utf-8', (error, data1)=>{

    if(error) return console.log(`Error!`);

    fileSystem.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2)=>{
        //the file will be read in the background and will not block the code, so meanwhile the rest of the code continues to be executed
        console.log(data2);  
        fileSystem.readFile('./txt/append.txt', 'utf-8', (error, data3)=>{
            console.log(data3);

            
            fileSystem.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (error)=>{
                console.log('your file has been written');
            });
        }); 
    });
});
console.log(`will read this!`); //so first we are 

/**
 * asychronous code is also known as non blocking
 * 
 */
/*----------------------------------------
----------------------------------------*/

/*----------------------------------------------------
                    HTTP SERVER
To build our server we have to do 2 things
- Create the server
- Start the server to start listening incoming requests
----------------------------------------------------*/

// creating -> this includes a callback function which is executed each time a new request hits the server
const server = http.createServer((request, response)=>{
    //console.log(request);
    //console.log(request.url);

    if (request.url === '/' || request.url === '/overview'){
        response.end(`Hello from the ${request.url} route`);
    } else if (request.url === '/product'){
        response.end(`Hello from the ${request.url} route`);
    } else {
        response.writeHead(404, {
            'Content-type': 'text/html', 
            'my_own_header': 'header_que_acabo_de_inventar'
        });
        response.end(`<h1>Page not found!</h1>`);
    }
    
});

// starting -> where the server starts listening incoming requests on the localhost ip and port 3000
server.listen(3000, '127.0.0.1', ()=>{
    console.log(`Listening requests on port 3000`);
});


/*----------------------------------------
----------------------------------------*/


/**
 * DOCUMENTATION:
 * https://nodejs.org/en/docs/
 * 
 * Execute using node index.js
 * 
 * **/ 