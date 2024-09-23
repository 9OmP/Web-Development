const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

app.get('/todos', (req, res) => {
  const id = req.query.id;
  if (!id) {
    res.status(400).send({ error: 'id parameter is required' });
    return;
  }

  const response = {
    id,
    title: `Title number_${id}`,
    description: `Description number_${id}`
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});