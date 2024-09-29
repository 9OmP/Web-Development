const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/",(req, res)=>{
    res.status(200).json({
        network: Math.floor(Math.random() * 100) + 1,
        jobs: Math.floor(Math.random() * 100) + 1,
        messaging: Math.floor(Math.random() * 100) + 1,
        notifications: Math.floor(Math.random() * 100) + 1,
    })
})


app.listen(PORT)