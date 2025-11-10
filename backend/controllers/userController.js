import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Password matches → create token
    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};






     const registerUser=async(req,res)=>{
           try{
        const{name,email,password}=req.body;

        const exists=await UserModel.findOne({email});
        if(exists){
            return res.json({ success:false,message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({ success:false,message:" please enter a valid email"})
         }

         if (password.length < 8) {
            return res.json({ success:false,message:"Password must be at least 8 characters long" });
          }

          const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);

            const newUser=new UserModel({name,email,password:hashedPassword});

            const user=await newUser.save();
            const token=createToken(user._id);
            res.json({success:true,token})
              }catch(error){
             console.log(error);
               res.json({success:false,message:error.message})


    }

}




const adminLogin=async(req,res)=>{
  try{
    const {email,password}=req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token=jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    }else{
      res.json({success:false,message:"Invalid credinatials"})
    }


  }catch(error){
    console.log(error);
    res.json({success:false,message:error.message})

  }

}

export {loginUser,registerUser,adminLogin}