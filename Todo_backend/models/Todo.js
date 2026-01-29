const mongoose = require('mongoose');
// description of your data is called as schema
const todoschema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
            unique: true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo",todoschema);