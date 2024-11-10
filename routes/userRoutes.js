const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, uploadPhoto } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, uploadPhoto, createUser);
router.get('/', protect, getAllUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, uploadPhoto, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router;