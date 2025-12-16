import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name:{type:String,required:true},
  password:{type:String,required:true},
  password:{type:String,required:true,uniqe:true},
  role:{type:String,enum:["owner","user"] ,default:'user'},
  image:{type:String,default:''}
},{timestamps:true})

const User =mongoose.models.User || mongoose.model('user',userSchema)

export default User