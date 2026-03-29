// import path from "path"
const path = require("path");

let myPath = "C:\\Users\\Prachi\\Desktop\\FullStack\\Backend-03\\prachi.txt"

console.log(path.extname(myPath));   // .txt
console.log(path.dirname(myPath));   // folder path
console.log(path.basename(myPath));  // file.txt
console.log(path.join("c:/","program/prachi.txt"));