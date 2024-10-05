const mysql = require('mysql2');
const dbConfig = require('../../config/db_config.json');


let con = mysql.createConnection({host: dbConfig.host, user: dbConfig.user, password: dbConfig.password, connectTimeout:100});
con.config.namedPlaceholders = true;
 con.connect(function(err) {
     if (err) {
         console.error(err.message);
         throw err;
     }
     else
     {
         console.log("Connected!");
    
         let user = {"id" : 1, "name":"wuforde"};
     con.query('select * from wudb.users where id = :id or name = :name',user, function(err, result){
        if(err){
             console.error(err);
             throw err;
        }
        else
             console.log(JSON.stringify(result));     
 con.end();
    
     });
 }
   });