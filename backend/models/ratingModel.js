// models/ratingModel.js
import { pool } from '../config/db.js';

export const createRating = async (storeId, userId, rating, comment) => {
  const query = `
    INSERT INTO ratings (store_id, user_id, rating, comment)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [storeId, userId, rating, comment];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const getRatingsForStore = async (storeId) => {
  const query = 'SELECT * FROM ratings WHERE store_id = $1';
  const { rows } = await pool.query(query, [storeId]);
  return rows;
};
