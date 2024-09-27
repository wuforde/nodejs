const express = require('express')
const url = require('url')
const app = express()



app.get('/*',(request,response) => {
    let paths = url.parse(request.url,true);
    let path = paths.pathname;
    var objname = path.split('/')[1];
    
    let o = require('./' + objname+'.js');

    console.log(o.Run());
    response.send(o.whoami());

})

app.listen(4200,()=>'server up and listening on 4200');

