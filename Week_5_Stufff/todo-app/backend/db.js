const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

mongoose.connect(process.env.mongo_url);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo
}