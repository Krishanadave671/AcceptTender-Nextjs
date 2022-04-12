import mongoose  from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

const connectDb = Handler => async (req , res) => {
    if(mongoose.connections[0].readyState){
        return Handler(req, res);
    }
     await mongoose.connect(process.env.MONGO_URI);
     return Handler(req, res);
}
export default connectDb;