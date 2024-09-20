const express = require("express");
const cors = require("cors");
const { user } = require("./db/db");
const { create_user } = require("./db/types");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/cards", async(req, res) => {
    const users = await user.find({});
    res.json(users)
})

app.post("/cards", async (req, res) => {
    const create_payload = req.body;
    const new_user = create_user.safeParse(create_payload);
    if (!new_user.success) {
        return res.status(400).json({ 
            message: "Invalid user data", 
            errors: new_user.error.issues });
    }
    await user.create({
        name: new_user.data.name,
        description: new_user.data.description,
        interests: new_user.data.interests,
        socials: new_user.data.socials,
      })
    res.json({
        new_user
    });
});


app.listen(port);