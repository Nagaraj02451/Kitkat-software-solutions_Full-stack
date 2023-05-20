const express = require("express")
require("dotenv").config()
const RouterOne = require("./Modules/Router")
const cors = require("cors") 
const multer = require('multer');

const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.static('./public'));

app.use(express.json())

mongoose.connect(process.env.DB)
.then(()=>{
console.log("Database is connected");
})
.catch(()=>{
console.log("Database is not connected");
})
app.use("/api" ,RouterOne)


//use of multer package Resume Storage purpose
let storage = multer.diskStorage({
    destination :(req, file, cb)=>{
        cb(null, './public/uploads')
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+""+file.originalname  )
    }
})

let upload = multer({
    storage : storage,
});

let uploadHandler = upload.single('file');

app.post('/upload', (req,res)=>{
    uploadHandler(req, res, function(err){
       
        if(!req.file){
            res.status(400).json({message : "No file!"});
        }else{
            res.status(200).json( {message : "Uploaded to the Server!"})
        }
    })
})


app.listen(process.env.PORT ,()=>{
    console.log("Port Number" , process.env.PORT);
})