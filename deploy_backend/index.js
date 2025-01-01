require('dotenv').config()

const express = require('express');
const app = express()

const port = 4000

app.get('/' , (req , res) => {
    res.send("Hello ZAINs its your main-page !")
})

app.get('/instagrame' , (req , res) => {
    res.send("<b><i>Hello intagrame page</i></b>")
})

app.get('/login' , (req , res) => {
    res.send('<h1>Please Login before doing something</h1>')
})

app.get('/youtube' , (req , res) => {
    res.send("<h1>Well come in youtube!</h1>")
})

app.get('/ZainPortfolio' , (req , res) => {
    res.send("<h1><b>THis is Your APP Developer Portfolio page .</b></h>")
})

app.listen(process.env.PORT ,  () => {
    console.log(`Hey Zain, Your app listening on port ${port} `);
})
