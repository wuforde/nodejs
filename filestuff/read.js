var fs = require("fs");

fs.readFile('./filestuff/test.json','utf8', (err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data)
});