// import schema
const Todo = require("../models/Todo.js");

// define route handler 
exports.createTodo = async(req,res) =>{
   try {
// extract title and description
// fetch 
const {title,description} = req.body;
// if(!title || !description) {
//     res.json({
//         message:"title and description is required."
//     })
//     return 
// }

// create new todo object 
const response = await Todo.create({title,description});
// if(!response){
//     res.status(500).json(
//         {
            
//         }
//     )
// }
res.status(200).json(
    {
        success:true,
        data:response,
        message:'entry created succesfully'
    }
)
   }
   catch(error){
    console.log(error);
    res.status(500).json({

        success:false,
        data:"internal server error",
        message:error.message,

    })

   }
}

