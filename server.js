const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://gurugsv7.github.io'
}));
app.use(express.json()); // Added middleware to parse JSON bodies

// Remove or override the problematic Permissions-Policy header
app.use((req, res, next) => {
  res.removeHeader('Permissions-Policy');
  next();
});

// ...existing code...

app.post('/api/login', (req, res) => {
  console.log('Login attempt with body:', req.body); // Log the received payload
  const { username, password } = req.body;
  if (!username || !password) {
    console.error('Missing credentials:', req.body); // Log error details
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  // ...existing code to handle login...
});

// ...existing code...
