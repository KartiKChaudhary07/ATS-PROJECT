const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://kartkp:kartknteam@cwscandb.lj5crqc.mongodb.net/")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    email:{
            type:String,
            required:true,
    },
    contact:{
            type:Number,
            required:true,
        }
    
    })


const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection