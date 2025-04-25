import { Pool } from 'pg'; // Import the Pool class from pg

// Create the pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'storerating',
  password: '1234',
  port: 5432,
});

// Named export of pool
export { pool }; // Export pool for use in other files
