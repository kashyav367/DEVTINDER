const express = require("express")

const app = express()


app.use("/test" , (req,res) => {
    res.send("hello ji")
})

app.use("/hello" ,  (req,res) => {
    res.send("namaste ji")
})

app.listen(7777, () => {
 console.log('Server is running at port 7777....')
}) 
