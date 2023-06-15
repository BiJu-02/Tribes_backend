const mysql = require("mysql");
require("dotenv").config({path: "./.env"});

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    multipleStatements: true,
});

module.exports = conn;