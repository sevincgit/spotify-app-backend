import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

// list details of connection
let connection = {
  host: 'localhost',
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
};
// connect to database show on console:

const pgp = pgPromise({
  connect(client) {
    console.log('Connected to database', client.connectionParameters.database);
  },
});

// database to interact with in controllers:
export const db = pgp(connection);
