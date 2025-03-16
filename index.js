const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// POST method to handle contact form submissions
app.post('/contact', (req, res) => {
  const { fullname, email, subject, message } = req.body;
  console.log(`Received message from ${fullname} (${email}): ${subject} - ${message}`);
  res.send('Message received');
});

// GET method to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Website Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});