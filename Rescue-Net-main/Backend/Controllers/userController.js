
const asyncHandler = require("express-async-handler")  //It HANDLES all the errors automatically
const User = require("../model/userModel");
const jwttoken = require("../config/jwttoken");

const registerUser = asyncHandler(async(req,res)=>{
    const {name , email , password , pic} = req.body;
    if(!name || !email || !password ){
        res.status(400);
        throw new Error("Please enter the required inputs !")
    }

    const Existing = await User.findOne({email})
    if (Existing){
        res.status(400)
        throw new Error ("User already exists!")
    }
    const newUser = await User.create({
        name , email , password , pic,
    })

    if (newUser){
        res.status(201).json({
            id:newUser.id,
            name:newUser.name,
            password:newUser.password,
            pic:newUser.pic,
            token: jwttoken(newUser.id)
        })
    }else{
        res.status(400);
        throw new Error("Failed to create a new account")
    }
})
const authUser = asyncHandler(async(req,res)=>{
    const { email , password ,} = req.body;


    if( !email || !password ){
        res.status(400);
        throw new Error("Please enter the required inputs !")
    }

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))){
        res.status(201).json({
            id:user.id,
            name:user.name,
            password:user.password,
            email: user.email,
            pic:user.picture,
            token: jwttoken(user.id)
        })
    }else{
        res.status(400);
        throw new Error("Failed to Login account")
    }
   

})

module.exports = {registerUser , authUser }