import cookieParser from 'cookie-parser'
import User from '../models/user.model.js'
const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, //7 day
  httpOnly: true,
  secure: true
}

const register = async (req, res) => {
  const { fullName, email, password } = req.body
  if (!fullName || !email || !password) {
    return res.status(400).json({
      sucess: false,
      msg: 'all feilds are  required'
    })
  }
}

const userExists = await User.findOne({ email })
if (userExists) {
  return res.status(400).json({
    sucess: false,
    msg: 'all feilds are  required'
  })

  const user = await User.create({
    fullName,
    name,
    password
  })

  if (!user) {
    return res.status({
      seccess: false,
      msg: 'user restration failed ,please try again'
    })
  }
  await user.save()
  user.password = undefined

  res.send(201).json({
    success: true,
    message: 'User registered successfully',
    user
  })

  // tudo file upload
  const token = await user.generateJWTToken()
  res.Cookie('token', token, cookieOptions)
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(200).json({
      sucess: false,
      msg: 'all fields are required'
    })
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user || user.comparePassword(password)) {

    return res.status(400).json({
      sucess:true,
      msg:""
    })
  }
}

const logout = (req, res) => {}

const getProfile = (req, res) => {}

export { login, logout, getProfile, register }
