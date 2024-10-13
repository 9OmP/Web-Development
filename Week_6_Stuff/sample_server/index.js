const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

app.get('/todos', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1; // generate random number between 1 and 6
  const response = Array.from({ length: randomNumber }, (_, i) => ({
    id: i + 1,
    title: `title${i + 1}`,
    description: `des${i + 1}`
  }));

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});