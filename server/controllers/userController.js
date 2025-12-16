import User from "../models/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateToken = (userId)=>{
const payload = userId
return jwt.sign(payload,process.env.JWT_SECRET)

}

export const rigisterUser = async (req,res)=>{
  try {
    const{name,password,email} = req.body;
    if(!name || !password || !email || password.length <8){
      res.json({success:false,message:"all fields are  required"})
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
      res.json({success:false, message:"user already exist please login"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const user = User.create({name,email,password:hashPassword})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}