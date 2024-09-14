const e = require('express');
const express = require('express');
const zod = require('zod'); 

const app = express();
const schema = zod.array(zod.number());
const schema1 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

num_of_reqs = 0;

function calculate_requests(req, res, next){
    num_of_reqs++;
    console.log('Request received');
    next();
}

function user_midddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != 'om' || password != 'admin'){
        res.status(401).json({
            "msg": "Unauthorized username or password"
        });
    } else{
        next();
    }
}

function kidney_midddleware(req, res, next){
    const kidneyId = parseInt(req.query.kidneyId);
    if (kidneyId !== 1 && kidneyId !== 2){
        res.status(400).json({
            "msg": "Invalid kidneyId",
        });
    } else{
        next();
    }
}

app.use(calculate_requests);
app.use(express.json());

app.use(calculate_requests);
app.use(express.json());

app.get('/health-checkup', user_midddleware, kidney_midddleware, (req, res) => {

    res.json({
        "msg": "Health checkup successful",
        "kidney_status": "Your kidney is fine"
    })

});


app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success){
        res.status(411).json({
            msg: "invalid inputs"
        })
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
