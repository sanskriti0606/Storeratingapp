import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import authRoutes from './routes/authRoutes.js';
import storeRoutes from './routes/storeRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/users', authRoutes); // ✅ Fix this: now you can call GET /api/users/:id



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
