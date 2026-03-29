 const fs = require('fs');

 console.log(fs);
 console.log("starting");
 fs.writeFileSync("prachi.txt","hello world");

 fs.writeFile("prachi2.txt", "hello universe ", ()=>{
    console.log("done");
    fs.readFile("prachi2.txt", (error,data)=>{
        console.log(error,data.toString())
    })
    fs.appendFile("prachi.txt","miss_coder",(err,data)=>{
        console.log(data)
    }) // every time whem we run this file it will add miss_coder
    
 })
 console.log("ending");