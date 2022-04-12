import Users from "../../models/Users";
import connectDb from "../../Middleware/conn";
const handler = async (req, res) => {
    if(req.method = "POST"){
        console.log(req.body);
            for(let i = 0 ; i < req.body.length; i++){
                let p = new Users(
                    {
                        companyname : req.body[i].companyname, 
                        RegistrationNumber : req.body[i].RegistrationNumber, 
                        Email :req.body[i].Email,
                        phone : req.body[i].PhoneNumber, 
                        RegisteredAddress : req.body[i].RegisteredAddress ,
                        city : req.body[i].city, 
                        state : req.body.state, 
                        Postalcode : req.body[i].Postalcode, 
                        PANnumber : req.body[i].PANnumber, 
                        contactname : req.body[i].contactname, 
                        DOB : req.body[i].DOB, 
                        Designation : req.body[i].Designation, 
                        password : req.body[i].password,
                        Gender : req.body[i].Gender, 
                    }
                )
                await p.save();
            }
        res.status(200).json({success : "success"});
    }else{
        res.status(400).json({error : 'This method is not allowed'})
    }
    
}
export default connectDb(handler);