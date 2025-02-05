const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://gurugsv7.github.io'
}));
app.use(express.json()); // Added middleware to parse JSON bodies

// ...existing code...

app.post('/api/login', (req, res) => {
  // Validate input payload (e.g., username and password)
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  // ...existing code to handle login...
});

// ...existing code...
