const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/todo",async (req, res) =>{
    const todos = await todo.find({});
    res.json(todos)
})

app.post("/todo", async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid payload",
        });
        return;
    } else{
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });
        res.json({
            msg: "Todo created"
        })
    }

})

app.put("/completed", async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid payload",
        });
        return;
    } else{
        //update in mongodb
        await todo.updateOne({
            _id: req.body.id
        }, {
            $set: {
                completed: true
            }
        })
        res.json({
            msg: "Todo marked as completed"
        })
    }
})

app.listen(port);