const mongoose = require("mongoose")

const Scheeema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    reenterpassword: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Register" , Scheeema)