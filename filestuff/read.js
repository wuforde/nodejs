var fs = require("fs");

fs.readFile('./filestuff/test.json','utf8', (err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data)
});

console.log(fs.readFileSync('./filestuff/test.json','utf-8'));

console.log("end");

