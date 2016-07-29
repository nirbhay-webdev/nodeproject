//Learning to run a simple http server on Nodejs

/*  1. Modules are code written to be reused again without writing similar functionality again.
    
    2.
    
    3. Nodejs requires loading core http module into the script assigning its content to a
       variable. Public API of http module is available through this particular variable.
       In our case, this variable is *http*
    
    4. Always use *require()* method to load modules
    
    5. Line 23 loads the module.
    
    6. *createServer()* method lets you run the server to recieve requests
    
    7. Line 29, *onRequest()* function stores the functionality to what
       to be done with the request recieved.
    
    8. *request* and *response* are two objects we get to work with through *createServer()* method
    
    9. request contains the data about the request sent to this server 
        and response contain information that we would wish to send back
    
    10. HTTP protocol require us to send back header and body separately when communicating with a client
    
    11. Client could be any system which requests the current server Example: Chrome Browser

    12. listen method configures through which port communication has to be established


 */











var http=require("http"); 
var url=require("url");

function onRequest(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log('Request for'+pathname+'recieved');
    console.log(request.url);
    console.log('request recieved'); 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello World");
    response.end();
}


http.createServer(onRequest).listen(8080);

console.log('server has started');



