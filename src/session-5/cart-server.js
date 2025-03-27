import http from "node:http"

const PORT = 3000;

const cart = [
    {id: 1, name:"Apple", quantity: 12, price:400},
    {id: 2, name:"Chocolate", quantity: 1, price:250}
]

const server = http.createServer( (req, res)=>{
    res.setHeader('Content-Type', 'application/json');

    let route = req.url;
    route = route.split("/")  // --> /cart/5   --> ['','cart','5']

    if (route[2] != "" ){
        var id = route[2]
    }
    route = route[1]


    switch (route) {
        case "cart":
            if (isNaN(id)){
                switch (req.method) {
                    case "GET":
                        res.writeHead(200);
                        res.end(JSON.stringify(cart))
                        break;
                
                    case "POST":
                        res.writeHead(201);
                        res.end(req.url + " POST")

                        break
                    default:
                        res.writeHead(404);
                        res.end("Route Not Found");
                        break;
                }
            }else{
                switch (req.method) {
                    case "PUT":
                        res.writeHead(404);
                        res.end(req.url + " PUT")

                        break;
                
                    case "DELETE":
                        res.writeHead(404);
                        res.end(req.url + " DELETE")

                        break

                    default:
                        res.writeHead(404);
                        res.end("Route Not Found");
                        break;
                }
            }
            
            break;
        default:
            res.writeHead(404);
            res.end("Route Not Found");
    }
} );


server.listen(PORT, "0.0.0.0",() => {
    console.log("Server started at http://localhost:3000")
})