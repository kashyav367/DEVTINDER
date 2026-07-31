const express = require("express")

const app = express()



// app.use("/hello/2" , (req,res) => {
//     res.send("hello bachooo!!")
// })

// app.use("/hello" ,  (req,res) => {
//     res.send("namaste ji")
// })



// app.use("/" , (req,res) => {
//     res.send("kaise ho")
// })


app.get("/users" ,  (req,res) => {
    res.send({firstname :"ankit", lastname: "singh"})
})

app.post("/users" ,  (req,res) => {
    res.send("save this data into database")
})

app.delete("/users" ,  (req,res) => {
    res.send("deleted successfully")
})


app.put("/users", (req,res) => {
    res.send("updated whole data")
})

app.patch("/users" , (req,res) => {
    res.send("update specific data")
})

app.use("/test" , (req,res) => {
    res.send("hello ji")
})

app.listen(7777, () => {
 console.log('Server is running at port 7777....')
}) 
