import { Schema, model } from 'mongoose'
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

const User = model('user', userSchema)
