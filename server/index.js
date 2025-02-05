require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Middleware
app.use(cors({
  origin: [
    'https://gurugsv7.github.io', // added GitHub Pages domain
    'https://elevatree.onrender.com',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Remove problematic Permissions-Policy header
app.use((req, res, next) => {
  res.removeHeader('Permissions-Policy');
  next();
});

// Enhanced initialization
async function initializeUsersFile() {
  try {
    await fs.access(USERS_FILE);
    console.log('Users file exists');
  } catch {
    console.log('Creating new users file');
    await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
    await fs.writeFile(USERS_FILE, JSON.stringify({ users: [] }));
  }
}

// Helper functions
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data).users;
  } catch (error) {
    return [];
  }
}

async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify({ users }, null, 2), 'utf8');
}

// Auth middleware
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, fullName, profession, interests } = req.body;
    
    // Read existing users
    const users = await readUsers();
    
    // Check if user exists
    if (users.find(user => user.email === email)) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      fullName,
      profession,
      interests,
      createdAt: new Date().toISOString()
    };

    // Save user
    users.push(newUser);
    await writeUsers(users);

    // Generate token
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);

    // Return user data without password
    const { password: _, ...userData } = newUser;
    res.status(201).json({ token, user: userData });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  console.log('Login attempt with body:', req.body); // Log the received payload
  console.log('Headers:', req.headers); // Log headers for debugging

  const { email, password } = req.body;
  
  if (!email || !password) {
    console.error('Missing credentials - Email:', !!email, 'Password:', !!password);
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const users = await readUsers();
    console.log('Found users:', users.length); // Log user count
    
    const user = users.find(u => u.email === email);
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    // Return user data without password
    const { password: _, ...userData } = user;
    res.json({ token, user: userData });

  } catch (error) {
    console.error('Login error:', error); // Detailed error logging
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/profile', auth, async (req, res) => {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id === req.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user data without password
    const { password: _, ...userData } = user;
    res.json(userData);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Default route to handle GET /
app.get('/', (req, res) => {
  res.send("Welcome to the Elevatree backend");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 10000;

// Initialize before starting server
initializeUsersFile()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to initialize:', error);
    process.exit(1);
  });
