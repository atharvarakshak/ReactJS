

import { connect, Schema, model } from "mongoose";
connect("mongodb://0.0.0.0:27017/react-login")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = model("userdata",newSchema)

export default collection