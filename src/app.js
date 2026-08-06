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

// app.get("/a/" , (req,res) => {
//     res.send({firstName: "Ankit", lastName: "Singh"})
// })
// app.get("/.*fly$/" , (req,res) => {
//     res.send({firstName: "Ankit", lastName: "Singh"})
// })


// app.get("/abc" , (req,res) => {
//     res.send({firstName: "Ankit", lastName: "Singh"})
// })


// app.get("/user" ,  (req,res) => {
//     console.log(req.query)
//     res.send({firstname :"ankit", lastname: "singh"})
// })

// app.get("/user/:userId/:name/:password" ,  (req,res) => {
//     console.log(req.params)
//     res.send({firstname :"ankit", lastname: "singh"})
// })

// // app.post("/users" ,  (req,res) => {
// //     res.send("save this data into database")
// // })

// // app.delete("/users" ,  (req,res) => {
// //     res.send("deleted successfully")
// // })


// // app.put("/users", (req,res) => {
// //     res.send("updated whole data")
// // })

// // app.patch("/users" , (req,res) => {
// //     res.send("update specific data")
// // })

// app.use("/test" , (req,res) => {
//     res.send("hello ji")
// })



// app.get("/users", 
//     (req,res,next) => {
//    console.log("Handling to route 1") 
// //    res.send("Response !!")
//    next()
//     // res.send("Response !!")
// },
// (req,res,next) => {
//   console.log("handing to route 2")
// //   res.send("Response 2")
//   next()
// },
// [
// (req,res,next) => {
//     console.log("handler route 3")
//     // res.send("response 3")
//     next()
// },
// (req,res,next) => {
//     console.log("handler route 4")
//     // res.send("response 4")
//     // next()
// },
// ],

// (req,res,next) => {
//     console.log("handler route 4")
//     res.send("response 5")
//     next()
// },

// app.use("/users", (req,res,next) => {
//     console.log("ypp") // middleware
//      res.send("i am first")
// })
// //separte route handler
// app.get("/users", (req,res,next) => {
//    console.log("response 1")
//    // res.send("request handler")
//    next()
// })

// app.get("/users", (req,res,next) => {
//    console.log("response 1")
//    res.send("request handler")
// })

// const {adminAuth, userAuth} = require("./middlewares/auth")

// app.use("/admin",  adminAuth)

// app.get("/admin/getAllData" , (req,res) => {
//     res.send("get all data ")
// })

// app.get("/admin/deleteAllData", (req,res) => {
//     res.send("delete all data")
// })

// app.get("/user", userAuth, (req,res) => {
//     res.send("user enter")
// }) 

// app.get("/user/data",userAuth, (req,res) => {
//     res.send("get my data boss")
// })

app.use("/" , (err,req,res,next) => {
    res.status(500).send("Something went wrong")
})


app.get("/user" , (req,res) => {
    // try{
    throw new Error("hhhiuhui")
    res.send("hello")
    // }
    // catch(err){
    //     res.status(500).send("some error context support team")
    // }
})

app.use("/" , (err,req,res,next) => {
    res.status(500).send("Something went wrong")
})

app.listen(7777, () => {
 console.log('Server is running at port 7777....')
}) 
