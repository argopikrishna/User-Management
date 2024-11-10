const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Create a new user
router.post('/', protect, userController.uploadPhoto, userController.createUser);

// Get all users
router.get('/', protect, userController.getAllUsers);

// Get a user by ID
router.get('/:id', protect, userController.getUserById);

// Update a user by ID
router.put('/:id', protect, userController.uploadPhoto, userController.updateUser);

// Delete a user by ID
router.delete('/:id', protect, userController.deleteUser);

module.exports = router;