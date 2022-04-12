const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        companyname : { type : String , required : true}, 
        RegistrationNumber : { type : Number , required : true }, 
        Email : {type : String , required : true },
        phone : { type : Number }, 
        RegisteredAddress : { type : String  , required : true} ,
        city : {type : String, required : true}, 
        state : {type : String }, 
        Postalcode : {type : Number , required : true}, 
        PANnumber : {type : String , required : true}, 
        contactname : {type : String , required : true}, 
        DOB : {type : Date , required : true }, 
        Designation : {type : String , required : true}, 
        password : {type : String , required : true},
        Gender : {type : String , required : true}, 
    }
)
mongoose.models = {}
export default mongoose.model("users",UserSchema );