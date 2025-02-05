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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  console.log('Request Body Raw:', req.body);
  next();
});

app.use(cors({
  origin: '*', // Temporarily allow all origins for testing
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization']
}));

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

// Update login route with more detailed error handling
app.post('/api/login', async (req, res) => {
  try {
    console.log('Raw request body:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('Missing credentials:', { email: !!email, password: !!password });
      return res.status(400).json({
        error: 'Missing credentials',
        received: { email: !!email, password: !!password }
      });
    }

    const users = await readUsers();
    console.log('Total users found:', users.length);
    
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    const { password: _, ...userData } = user;
    
    console.log('Login successful for user:', user.email);
    res.status(200).json({ 
      token, 
      user: userData,
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message
    });
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
