// import http from "node:http "



// server.listen (PORT,() =>{
//     console.log ("server started at http://localhost:3000")
// })

//import http from "http"

//const PORT = 3000;

//const server = http.createServer((req, res) => {
    //res.writeHead (200, {'content-type': "text/plain"});
   // res.end("my name is chaima")

//  })


//server.listen (PORT,"0.0.0.0",() =>{
       //  console.log ("server started at 192.168.0.")
   //  })






   import http from "http"

const PORT = 3000;

const server = http.createServer((req, res) => {
    // res.writeHead ('content-type', "text/plain");

    switch (req.url) {

        case "/":
            if (req.method === "GET"){
                res.writeHead(200);
                res.end("home page get ") 
            }
            if (req.method === "post"){
                res.writeHead(200);
                res.end("home page post") 
            }
            
            break;

            case "/about":

                res.writeHead(200);
                res.end("aboutus page")
            
    break;

        default:
            res.writeHead(404);
            res.end(" page not found")
            
    }

})


server.listen (PORT,"0.0.0.0",() =>{
         console.log ("server started at 192.168.0.")
    })