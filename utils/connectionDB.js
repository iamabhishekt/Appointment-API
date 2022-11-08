import mysql from 'mysql';
import config from '../config.js'; // import usersRoutes

const conn =mysql.createConnection(config);

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database connect success!");
})

export default conn; 

