const userModel = require("../models/userModels")
const bcrypt = require('bcryptjs')  // used this libraray to hash the password
const jwt = require('jsonwebtoken')

//Register callback
const registerController = async(req,res)=>{
    try{
      const existingUser = await userModel.findOne({email: req.body.email})
      if(existingUser){
        res.status(200).send({success: false, message: "User Already Exists"})
      }
      const password = req.body.password
      const salt = await bcrypt.genSalt(10)   // 10 means the rounds of salt in password
      const hashedPassword = await bcrypt.hash(password,salt)    // the hashed password is the saved in the db
      req.body.password= hashedPassword        //updating the password into hashedpassword
      const newUser = new userModel(req.body)
      await newUser.save() 
      res.status(201).send({message: "Register Successfully", success: true})
    }catch(error){
        console.log(error)
        res.status(500).send({success: false, message: `Register controller ${error.message}`})
    }
}


//LOGIN CALLBACK
const loginController = async (req,res)=>{
    try{
     const user = await userModel.findOne({email:req.body.email})
     if(!user){
        return res.status(200).send({message: 'user not found', success: false})
     }
     const isMatch = await bcrypt.compare(req.body.password , user.password)
      if(!isMatch){
        return res.status(200).send({message:"Invalid Email or Password", success: false})
      }
      const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:"1d"}) //SECURE TOKEN ON THE BASIS OF ID(user.id)
         res.status(200).send({message:"Login Successfull ", success: true, token})
    }catch(error){
        console.log(error)
        res.status(500).send({message:`Error in login CTRL ${error.message}` })
    }
}

const authController = async (req,res)=>{
try {
    const user = await userModel.findById({_id: req.body.userId})
    user.password = undefined
    if(!user){
        return res.status(200).send({message: 'user not found', success: false})
    }else{
        res.status(200).send({success:true,
        data:user                                                            
    })
    }
} catch (error) {
    console.log(error)
     res.status(500).send({message:'auth error', success:false,error})
}
}

module.exports = {loginController,registerController, authController}