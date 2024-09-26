const server = require("express");
const fs = require("fs");
const app = server();

app.get("/", (request, response) => response.send("good day"));

app.get("/test", (request, response) => response.send("good day from /test"));

app.get("/test/test", (request, response) => {

    response.send(request.query);
})

app.get("/specialWait", (request,response) => waiter(request,response,writeResponse));

app.get("/readFile", (request, response) =>
{
    fs.readFile('./apitest/testfile.json','utf8', (err,data)=>{

        response.status(200).contentType("text/html").write(data);
        response.end();

    })
})
function waiter(request,response,callback)
{
    setTimeout(() => {
        console.log("yo");
        let status = request.query["status"];
        callback(response,status,"i waited");
    }, 1000);
}

function writeResponse(response,status, textToWrite)
{

    response.status(status).send(textToWrite);
}


app.listen(4200,() => console.log('listening on 4200'));