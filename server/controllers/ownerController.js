import User from "../models/User";

export const changeRoleToOwner= async(req,res)=>{
  try {
    const{_id} = req.user;
    await User.findByIdAndUpdate(_id,{role:'owner'})
    return res.json({success:true, message:"now you can list your cars"})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}