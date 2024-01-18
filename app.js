import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.route.js'
const app = express()

// app.use(express().json)

// app.use(
//   cors({
//     origin: [process.env.FRONT_URL],

//     credential: true
//   })
// )

app.use('api/v1/user/',userRouter)
app.use(morgan("dev"))

app.use(cookieParser())

app.all('*', (req, res) => {
  res.send('idhidh oops 404!')
})

export default app
