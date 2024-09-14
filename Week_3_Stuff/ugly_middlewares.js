const e = require('express');
const express = require('express');

const app = express();

app.get('/health-checkup', (req, res) => {
    
    const kidneyId = parseInt(req.query.kidneyId);
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'om' || password != 'admin'){
        res.status(401).json({
            "msg": "Unauthorized username or password"
        });
        return;
    }

    if (kidneyId !== 1 && kidneyId !== 2){
        res.status(400).json({
            "msg": "Invalid kidneyId",
        });
        return;
    }

    res.json({
        "msg": "Health checkup successful",
        "kidney_status": "Your kidney is fine"
    })

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});