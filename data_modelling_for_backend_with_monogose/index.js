import express from 'express'

app = express()

const port = 3000 

app.get('/' , (req , res) => {
    res.send("THis is your home page")
})

app.listen(port , () => {
    console.log(`Server at http://localhost:${port}`);  
})

