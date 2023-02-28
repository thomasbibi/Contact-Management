const mongoose = require('mongoose')

const {Schema} = mongoose

const contactSchema = new Schema({
    firstname : {type : String ,required : true},
    lastname : {type : String ,required : true},
    email :{type : String ,required : true, unique : true},
    phone : {type : String ,required : true , unique : true}
})

module.exports = mongoose.model("contacts" , contactSchema)