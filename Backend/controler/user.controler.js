import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // Add this line to debug

        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // CHECK EMAIL ALREADY EXIST OR NOT 
        const existing=await User.findOne({email});
        if(existing){
            return res.status(400).json({message:"Email alrady existing "});
        }

        // HASH PASSWORD 

        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password:hashPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "User Created Successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                password:hashPassword,
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const match =await  bcryptjs.compare(password,user.password);
        if(!user || !match){
            res.status(400).send({message:"Invalid username and password"});
        }
        else{
            res.status(200).json({
                message:"Login Succesfuly ",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email,
                    password:password,
                },
            });
        }
    } catch (error) {
        console.log("Error:",+error.message);
        res.status(500).json({message:" Internal erorr comes!"});
    }
}