const express = require("express")
const dotenv = require("dotenv")
const { chats } = require("./data/data.js")
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/user.routes.js")
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Api running")
})

app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server up on ${process.env.PORT}`)
})
