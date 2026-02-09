const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({

 host: process.env.DB_HOST,       // where MySQL is running
  user: process.env.DB_USER,       // MySQL username
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME,   // the database name you created
  waitForConnections: true,        // if all connections are busy, wait
  connectionLimit: 10,             // max connections in the pool
  queueLimit: 0,  

}); 


async function testconnection(){
    try{
        const connection = await pool.promise().getConnection();
        console.log("Database connected Successfully");
        connection.release();
    }catch(error){
        console.error("Databasae connection failed", error);
    }
}
module.exports = { pool, testconnection};