// const http = require('node:http');
import http from "http"
// import {a} from "mymodule.js"
// import {a,b,c} from "mymodule.js"
// console.log(a,b,c);
import obj from "./mymodule.js"
console.log(obj);
// const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>hello world</h1>');
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);

}); 