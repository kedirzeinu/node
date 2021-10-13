/*const http = require('http');
const server = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.end("Welcome to our page")
    }
    if(req.url === "/about"){
        res.end("WE ARE Samurai")
    }
    res.end("Get out of here")
})
let port = process.env.PORT || 3000;
console.log(port);
server.listen(port); 
*/
const served = require('./tobeserved.js')
const http = require("http");
const server = http.createServer((req , res)=>{
    const name = prompt("Hey who are you: ");
    res.write(`"Hello ${name}"`);
    res.end();
})
server.listen(4000);