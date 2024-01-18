import { Schema, model } from 'mongoose'
import bcrypt, { hash } from 'bcryptjs'
import { Jwt } from 'jsonwebtoken'


const userSchema = new Schema({
  fullname: {
    type: 'String',

    required:[true,'name is required'],
    minLenght:[5,'Name lenght fkt minimum 5 '],
    maxLenght:[20,'Name lenght fkt minimum 5 '],
    lowercase:true,
    trim:true
    
  },





  email: {
    type: 'String',
    required:[true,'Email is required'],
    lowercase:true,
    trim:true,
    unique:true
  },

  password: {
    type: 'String',
    required:[8,'password required'],
    minLenght:[5,'Name lenght fkt minimum 5 '],
    maxLenght:[10,'Name lenght fkt minimum 5 '],
    select:'false'
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default:"USER",

  },
  forgetPasswordToken:String,
  forgetPasswordExpiry:Date
}{
  timestamps:true,    
})


userSchema.pre('save' , async function(next){
  if(!this.isModified("password")){
    return next()
  }
  this.password = await bcrypt.hash(this.password,10)

})

userSchema.methods={
  generateJWTToken : async function (){
    return await jwt.sign(
      {id: this._id, email:this.email ,subscription: this,subscription},
      process.env.JWTSECRET,
      {
        expiresin :process.env. JWT_EXPIRY,
      }


    )
  }
}

const User = model('user', userSchema)
