// routes/ratingRoutes.js
import express from 'express';
import { rateStore, getStoreRatings } from '../controllers/ratingController.js';

const router = express.Router();

// POST a new rating
router.post('/', rateStore);

// GET all ratings for a specific store
router.get('/:storeId', getStoreRatings);

export default router;
