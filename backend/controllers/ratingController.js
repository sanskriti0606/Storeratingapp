// controllers/ratingController.js
import { createRating, getRatingsForStore } from '../models/ratingModel.js';

export const rateStore = async (req, res) => {
  try {
    const { storeId, userId, rating, comment } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const newRating = await createRating(storeId, userId, rating, comment);
    res.status(201).json({ message: 'Rating submitted successfully', rating: newRating });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStoreRatings = async (req, res) => {
  try {
    const storeId = req.params.storeId;
    const ratings = await getRatingsForStore(storeId);
    res.status(200).json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
