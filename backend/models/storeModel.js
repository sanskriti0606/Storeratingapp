import { pool } from '../config/db.js'; // PostgreSQL Pool instance

// Create a store
export const createStore = async (name, description, ownerId) => {
  const query = `
    INSERT INTO stores (name, description, owner_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, description, ownerId];

  const result = await pool.query(query, values);
  return result.rows[0]; // Return the newly created store
};

// Get all stores
export const getAllStores = async () => {
  const result = await pool.query('SELECT * FROM stores');
  return result.rows;
};

// Get a store by ID
export const getStoreById = async (id) => {
  const result = await pool.query('SELECT * FROM stores WHERE id = $1', [id]);
  return result.rows[0];
};
