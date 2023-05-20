const mongoose = require("mongoose")

const ScheeemaSub = mongoose.Schema({
    email: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Subscribe" , ScheeemaSub)