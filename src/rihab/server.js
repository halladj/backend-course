import http from "node:http"


//const PORT = 3000;
//const server=http.createServer( (req,res)=>{
  //  res.writeHead(200,{'content-type' : "text/plain"});
    //res.end("rihab")
//} );
/*server.listen(PORT,"0.0.0.0",()=>{
    console.log("server started at http://localhost:3000")
})*/
const PORT = 3000;
/*const server=http.createServer( (req,res)=>{
    // res.writeHead('content-type', "text/plain");
    switch(req.url){
        case"/":
            res.writeHead(200);
            res.end("home age")
            break;
        case"/about":
            res.writeHead(200);
            res.end("aboutus page");
            break;
        default:
        res.writeHead(404);
        res.end("page not find");
    }
    });
    server.listen(PORT,"0.0.0.0",()=>{
    console.log("server started at http://localhost:3000")
    })*/
    const server=http.createServer( (req,res)=>{
        // res.writeHead('content-type', "text/plain");
        switch(req.url){
            case"/":
            if(req.method==="GET"){
                res.writeHead(200);
                res.end("home age")
            }
            if(req.method==="GET"){
                res.writeHead(201);
                res.end("home age")
            }
                break;
            case"/about":
                res.writeHead(200);
                res.end("aboutus page");
                break;
            default:
            res.writeHead(404);
            res.end("page not find");
        }
        });
        server.listen(PORT,"0.0.0.0",()=>{
        console.log("server started at http://localhost:3000")
        })