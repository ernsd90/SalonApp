const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Adjust the path as necessary

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Use this in your routes file
router.get('/protected-route', authMiddleware.protect, someController.someProtectedMethod);

module.exports = router;
