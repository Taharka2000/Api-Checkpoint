//creation d'un model user  avec mongoose
const mongoose = require("mongoose");
const persone= mongoose.Schema({
    name: {type: String},
    email:{ type :String },
    user:{type :String},
    age:Number
})

module.exports= mongoose.model("User",persone)