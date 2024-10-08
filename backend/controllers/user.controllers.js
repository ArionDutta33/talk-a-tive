const asyncHandler = require("express-async-handler")
const User = require("../model/User.model")
const generateToken = require("../config/generateToken")
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields")
    }
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        res.status(400);
        throw new Error("User already exists")
    }
    const user = await User.create({
        name,
        email,
        password,
        pic
    })
    //!this user.match should have been in login check 
    //*solved
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Failed to create a new user")
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("I nvalid Email or Password")
    }
})
// */api/user?search=piyush
// const allUsers = asyncHandler(async (req, res) => {
//     const keyword = req.query.search ? {
//         $or: [
//             { name: { $regex: req.query.search, $options: "i" } },
//             { email: { $regex: req.query.search, $options: "i" } },
//         ]
//     } : {}
//     const users = await User.find(keyword).find({ _id: { $ne: req.user._id } })
//     res.send(users)
// })

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    // Add the condition to exclude the logged-in user directly in the query
    const users = await User.find({
        ...keyword,
        _id: { $ne: req.user._id },
    });

    res.send(users);
});
module.exports = { registerUser, authUser, allUsers }


// await User.find(keyword)).find({ _id: { $ne: req.user._id } }


//todo correct the api routes