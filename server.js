const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://gurugsv7.github.io'
}));

// ...existing code...
