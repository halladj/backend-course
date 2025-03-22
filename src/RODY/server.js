import http from"node:http"

const PORT=3000;

const server =http.createServer((req,res)=>{
    //res.writeHead(200, {'content-type' : "text/plain"});
    switch (req.url) {
        case "/":
            if(req.metode === "GET"){
            res.writeHead(200)
            res.end("home page get")
            }
            if(req.method === "POST"){
                res.writeHead(201)
                req.end("home page podt")
            }
            break;
    case "/about":
        res.writeHead(200)
        res.end("About page")
        default:
            res.writeHead("404")
            res.end("page not found")
            break;
    }


});

server.listen(PORT ,"0.0.0.0", ()=>{
    console.log("server started at http://192.168.0.11/3000")
})