import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()


// app.use(express().json)

// app.use(
//   cors({
//     origin: [process.env.FRONT_URL],

//     credential: true
//   })
// )
app.use(cookieParser())

app.all('*', (req, res) => {
  res.send('idhidh oops 404!')
})

export default app
