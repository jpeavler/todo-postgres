const Pool = require("pg").Pool;    //allows us to connect to a postgreSQL database

//Lets us connect to my postgres database
const pool = new Pool({ 
    user: "postgres",
    password: process.env.password,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;  //export pool to be used in other files