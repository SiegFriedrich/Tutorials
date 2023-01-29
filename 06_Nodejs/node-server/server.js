const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const sendResponse = (fileName, statusCode, response) =>{
    fs.readFile(`./html/${fileName}`, (error, data)=>{
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.end("Sorry, internal error");
        }else {
            response.statusCode = statusCode;
            response.setHeader("Content-Type", "text/html");
            response.end(data);
        }
    });
}

const server = http.createServer((request, response)=>{
    const url = request.url;
    const method = request.method;
    if("GET" == method){
        if(url == '/'){
            sendResponse("index.html", 200, response);
        }else if(url == '/about'){
            sendResponse("about.html", 200, response);
        }else if(url == '/login') {
            sendResponse("login.html", 301, response);
        } else {
            sendResponse("404.html", 404, response);
        }
    } else {
        if(url == '/process-login'){
            let body = [];
            request.on('data', (chunk)=>{
                body.push(chunk);
            });
            request.on('end', ()=>{
                body = Buffer.concat(body).toString();
                body = qs.parse(body);
                console.log(body);

            });
            
        }
    }
});

const port = 3000;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);    
});