const express = require('express');
const router = express.Router();

// Sample data (nanti diganti dengan database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() }
];

// GET all users
router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// GET user by ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST create new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// PUT update user
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    updatedAt: new Date()
  };
  
  res.json({
    success: true,
    message: 'User updated successfully',
    data: users[userIndex]
  });
});

// DELETE user
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'User deleted successfully'
  });
});

module.exports = router;