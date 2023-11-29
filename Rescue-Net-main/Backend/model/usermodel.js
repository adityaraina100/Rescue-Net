const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userModel = mongoose.Schema({
    name :{type: String ,required : true
    },
    email :{type: String , unique: true , required : true
    },
    password :{type: String ,required : true
    },
    picture :{type: String , default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
}


,{
    timestamps: true,
})

userModel.methods.matchPassword= async function(enterpw){
    return await bcrypt.compare(enterpw , this.password)
}


// This code defines a pre-save middleware that runs before saving a user document. It checks if the password has been modified (to avoid rehashing when other fields are updated). If the password is modified, it generates a salt using bcrypt.genSalt and then hashes the password using bcrypt.hash. The hashed password is then stored in the this.password field
userModel.pre('save',async function(next){
    if (!this.isModified){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password  = await bcrypt.hash(this.password,salt)
    
})
const User = mongoose.model("User",userModel)


module.exports = User 