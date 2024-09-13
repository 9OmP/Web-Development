const express = require('express');

const app = express();
app.use(express.json());

const user = {
    name: "om",
    kidneys: [{
        healthy: true
    }]
}

const users = [user] 

app.get('/', function(req, res) {
    let user_kidneys = users[0].kidneys;
    let num_of_kidneys = user_kidneys.length;
    let num_of_healthy_kidneys = 0;
    for (let i = 0; i < user_kidneys.length; i++) {
        if (user_kidneys[i].healthy === true) {
            num_of_healthy_kidneys++;
        }
    }
    let num_of_unhealthy_kidneys = num_of_kidneys - num_of_healthy_kidneys;

    res.json({
        name: users[0].name,
        num_of_kidneys: num_of_kidneys,
        num_of_healthy_kidneys: num_of_healthy_kidneys,
        num_of_unhealthy_kidneys: num_of_unhealthy_kidneys
    });
})

app.post("/", function(req, res) {
    const is_healthy = req.body.is_healthy;
    users[0].kidneys.push({
        healthy: is_healthy
    });
    res.json({
        message: "kidney added"
        });
});


app.put("/", function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "kidneys updated"
    })
});

app.delete("/", function(req, res) {
    if (is_there_atleast_one_unhealthy_kidney()){
        const new_kidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            new_kidneys.push(
            users[0].kidneys[i]
        );
      }
   }
   users[0].kidneys = new_kidneys;
   res.json(
      {
        message: "unhealthy kidneys deleted"
      }
    );
    } else{
        res.status(411).json(
            {
                message: "no unhealthy kidneys to delete"
            }
    );
    }
    
});

function is_there_atleast_one_unhealthy_kidney(){
    for(let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy === false){
            return true;
        }
    }
    return false;
}


app.listen(3000);

