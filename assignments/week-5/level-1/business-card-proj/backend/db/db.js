const config = require('./config.json');
const mongoose = require("mongoose");

mongoose.connect(config.mongo_url);

const user_schema = mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    socials: Object
});

const user = mongoose.model("User", user_schema);

module.exports = {
    user
}


