
// const add  = require('./modules/add')
// console.log(add.sum(1,244))
// console.log(add.PI)
// console.log(new add.SomeObject())

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//    res.send("Hello world welcome to express js")
// })
// app.listen(3000,()=>{
//     console.log(`server is running in 3000`)
// })
const express = require("express");
const path = require("path");
const app =  express();
app.use(express.static(path.join(__dirname, "/public")));
app.listen(3000, () => {  
    console.log("Server running on 3000");
});