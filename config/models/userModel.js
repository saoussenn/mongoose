const mongoose = require('mongoose')
const schema=mongoose.Schema

const userSchema= new schema({

    name:{type:String,required:true,default:"noname"},
    age:Number,
    favoriteFoods : {type:[String]}
});

const user=mongoose.model("user",userSchema)
module.exports= user


