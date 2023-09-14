import pg from "pg";
import * as dotenv from 'dotenv';

dotenv.config();
const {Pool} = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: process.env.DB_PASSWORD,
    database:"rendimentos_poupança"
});

export {connection};