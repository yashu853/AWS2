const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/signup', userController.signup);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
