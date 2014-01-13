var http = require("http");
var fs = require("fs");
console.log("Starting");

var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response){
    console.log("Received request: " + request.url);
    fs.readFile("../" + request.url, function(error, data){
        if (error) {
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("Sorry the page was not found");
        } else {
            response.writeHead(200, {"Content-type":"text/html"});
            response.end(data);
        }
    });
});

server.listen(port, host, function(){
    console.log("Listening " + host + ":" + port);
});

fs.watchFile("config.json", function(){
    config = JSON.parse(fs.readFileSync("config.json"));
    host = config.host;
    port = config.port;
    server.close();
    server.listen(port, host, function(){
        console.log("Now listening " + host + ":" + port);
    }); 
});

