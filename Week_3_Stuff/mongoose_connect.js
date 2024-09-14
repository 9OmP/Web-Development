const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const User = mongoose.model("User", {
    name: String,
    email: String,
    pasword: String,
  });

  app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
  
    const query = User.where({ email: email });
    const existingUser = await query.findOne();
  
    if (existingUser) {
      res.status(400).json({
        msg: "User already exists"
      });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password
      });
      await user.save();
      res.json({
        msg: "User created successfully"
      });
    }
  });

app.listen(3000);