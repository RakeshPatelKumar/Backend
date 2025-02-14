require('dotenv').config();
const express = require('express')
const app  =express()
const port = 3000
app.get('/' , (req,res)=>{
    res.send("Hello World")
})

app.get('/twitter',(req,res)=>{
    res.send("twitter .com");
})

app.get('/Doctor',(req, res)=>{
    res.send("<h2><i>Hello Doctor Aishu</i></h2>")
})

app.listen(process.env.PORT,()=>{
    console.log('your server is running on port  $',{port})
})
