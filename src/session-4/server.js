import http from "node:http"


const PORT = 3000;

const server = http.createServer( (req, res)=>{
    // res.writeHead('Content-Type', "text/plain");

    switch (req.url) {
        case "/":
            if (req.method === "GET"){
                res.writeHead(200);
                res.end("Home Page get")
            }
            
            if (req.method === "POST"){
                res.writeHead(201);
                res.end("Home Page post")
            }
            break;
        case "/about":
            res.writeHead(200);
            res.end("Aboutus Page")
            break;
        default:
            res.writeHead(404)
            res.end("Page not found")
    }
} );


server.listen(PORT, "0.0.0.0",() => {
    console.log("Server started at http://localhost:3000")
})