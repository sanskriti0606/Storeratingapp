import { pool } from '../config/db.js';  // Ensure correct path relative to userModel.js

// Create a new user
const createUser = async (name, email, password, address) => {
  const query = `
    INSERT INTO users (name, email, password, address)
    VALUES ($1, $2, $3, $4) RETURNING *;
  `;
  const values = [name, email, password, address];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

// Find user by email
const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error finding user:', err);
    throw err;
  }
};

// Find user by ID
const findUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];  // If user is not found, this will return undefined
  } catch (err) {
    console.error('Error finding user by ID:', err);
    throw err;
  }
};

export { createUser, findUserByEmail, findUserById };
