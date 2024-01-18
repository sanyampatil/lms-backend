
import { config } from 'dotenv'
config()
import app from './app.js'
import connectionToDB from './config/dbconnection.js'
const PORT = process.env.PORT || 7086


app.use('/api', (req, res, next) => {
  res.send('hello')
})

connectionToDB();

app.listen(PORT,() => {

  console.log(`sever is runnig http://localhost:${PORT}`)
})
