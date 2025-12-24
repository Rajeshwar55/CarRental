import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateToken = (userId)=>{
const payload = userId
return jwt.sign(payload,process.env.JWT_SECRET)

}

export const registerUser = async (req,res)=>{
  try {
    const{name,password,email} = req.body;
    if(!name || !password || !email || password.length <8){
     return res.json({success:false,message:"all fields are required dont miss any one field"})
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
       return res.json({success:false, message:"user already exist please login"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const user = await User.create({name,email,password:hashPassword})
    const token = generateToken(user._id.toString())
     return res.json({success:true, token})
  } catch (error) {
     return res.json({success:false, message:error.message})
  }
}

export const loginUser = async (req,res)=>{
  try {
    const{email,password} = req.body;
    const user = await User.findOne({email})
    if(!user){
      return res.json({success:false, message: "user not found"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
     return res.json({success:false, message:"password incorrect "})
    }
     const token = generateToken(user._id.toString())
    res.json({success:true, token})
  } catch (error) {
    console.log(error);
    return res.json({success:false,message: error.message})
  }
}
export const getUserData = async(req,res)=>{
  try {
    const {user} = req;
    res.json({success:true , user})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
  }
}