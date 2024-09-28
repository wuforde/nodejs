const mysql = require('mysql2');
const dbConfig = require('../../config/db_config.json');

var con = mysql.createConnection({host : dbConfig.host, user : dbConfig.user, password: dbConfig.password});

con.connect(function(err) {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else
        console.log("Connected!");
    
    con.query('select * from wudb.users', function(err, result){
       if(err){
            console.error(err);
            throw err;
       }
       else
            console.log(result);     
con.end();
    });
  });