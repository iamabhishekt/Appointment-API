
import mysql from 'mysql';
import config from '../config.js'; // import usersRoutes



export default conn; 
//  const conn =mysql.createConnection(config);

require('dotenv').config()


const mysql = require('mysql2')


const connection = mysql.createConnection(process.env.DATABASE_URL)

console.log('Connected to PlanetScale!')

connection.end()
