import User from "../models/UserModel.js";

export const createUser = async (req, res) => {
    try {
        const { username, email, password, phoneNo } = req.body

        console.log(req.body,"dcfvghj");
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            phoneNo: phoneNo
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getallUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}