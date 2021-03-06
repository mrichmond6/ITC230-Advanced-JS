//bookswitch.js
"use strict"; 

var http = require ('http'); 
var fs = require ('fs'); 
var qs = require("querystring"), books = require("./lib/books"); 

// This is the function that sets up the pathing and 

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200; 
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain'}); 
            res.end('500 - Internal Error of Doom'); 
        } else {
            res.writeHead(responseCode, 
                {'Content-Type': contentType}); 
            res.end(data);         
        }
        
    }); 
}

// The switch in the app. 

http.createServer(function(req, res) {
    
    
    var url = req.url.split("?"); 
    console.log(url)
    
    var params = qs.parse(url[1]); 
    console.log(params); 
    // Normalizing the url, making the extra trailing slash optional, 
    // making the url lowercase. 
    
    var path = url[0].toLowerCase();
    
    // The switch!
    
    switch(path) {
        case '/': 
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the Book App!');
            break;
        case '/about': 
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/search':
            console.log(books.get(params.title))
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the Book App Search Page!');
            break;    
        case '/add':
            console.log(books.get(params.title))
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('add'); 
            break;    
        case '/delete':
            console.log(books.get(params.title))
            res.writeHead (200, {'Content-Type': 'text/plain'});
             res.end('Welcome to the Book App Delete Page!');
            break;        
        default:  
            res.writeHead (404, {'Content-Type': 'text/plain'});
            res.end('404: page not found'); 
            break;
    }
    
        
        
}).listen(3000); 

console.log('Server started on 127.0.0.1:3000; press Ctrl+C to terminate....'); 

