import dotenv from 'dotenv';

dotenv.config(); // loads .env or .env.local
import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
 connectionString:process.env.DATABASE_URL
})

 export default pool
 