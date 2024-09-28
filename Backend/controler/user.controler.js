import User from "../model/user.model.js";



export const signup = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // Add this line to debug

        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new User({
            fullname,
            email,
            password,
        });

        await newUser.save();

        res.status(201).json({
            message: "User Created Successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
