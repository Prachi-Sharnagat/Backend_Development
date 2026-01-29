const mongoose = require('mongoose');
// this line will make sure that process object get everything inside .env
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connection sucessful");
    }) 
    .catch((error)=>{
        console.log("issue");
        console.log(error.message);
        process.exit(1);

    })
        
}

module.exports = dbConnect; 