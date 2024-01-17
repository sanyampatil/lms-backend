import app from './app.js'
const PORT = process.env.PORT || 5000


app.use('/api', (req, res, next) => {
  res.send('hello')
})


app.listen(PORT, () => {
  console.log(`sever is runnig http://localhost:${PORT}`)
})
