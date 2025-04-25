import express from 'express';
import { registerUser, loginUser, getUserById } from '../controllers/userController.js';  // Correct with .js extension

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getUserById);  // Route to get user by ID

export default router;
