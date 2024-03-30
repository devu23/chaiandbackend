const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send("Login successful")
})


app.get('/twitter',(req,res)=>{
res.send("<h1>This is under heading 1</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})