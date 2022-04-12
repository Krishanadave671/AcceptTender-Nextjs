import Users from "../../models/Users";
import connectDb from "../../Middleware/conn";
const handler = async (req, res) => {
    let users =  await Users.find();
    console.log(users);
    res.status(200).json({ users})
}
export default connectDb(handler);