require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Aisu!')
})

app.get('/twitter',(req,res) =>{
    res.send('@rakesh_kl_rahul');
})

app.get('/login',(req,res) =>{
    res.send('<H1>Hello Aisu</H1>');
})

app.get('/youtube',(req,res) =>{
    res.send("<h1>Hello Rakesh </H1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})