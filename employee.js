var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    
    port: 3306,

    user: "root",

    password: "Cookie123",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  
    // createEmployee();
  });