var http=require("http");
var url=require("url");

function start(route){
function onRequest(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log('Request for'+pathname+'recieved');
    console.log(request.url);
    console.log('request recieved'); 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello World");
    response.end();
}


http.createServer(onRequest).listen(8888);

console.log('server has started');

}

exports.start = start;function route(pathname){
    console.log('About to route to request for'+pathname);
}

exports.route =route;var server =require('./server');
var route=require('./route');
var requestHandlers = require('./requestHandlers');

server.start();