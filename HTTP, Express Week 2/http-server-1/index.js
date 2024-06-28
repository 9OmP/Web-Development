const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/', function(req, res){
    console.log(req.body); 
    console.log(req.headers.authorization);
    res.send('Hello from post');
})

app.get('/', function(req, res){
    res.send('Hello from get');

})

app.listen(port)
