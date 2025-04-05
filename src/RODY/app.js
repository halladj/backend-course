import express from "express";

const app = express()



const Middleware =(req,res,next) =>{
    console.log(`Request receve at: $(date.toISOString())for $(req.method): $(req.url)`)
    next()
}
app.use(Middleware)
app.use((req, res, next)=>{
    console.log("middleware No1.")
    req.isAuth = false
    next()
});
 


app.get("/",(req, res,) => {
    console.log("handler msg.");
    if(!req.isAuth){
     res.sendStatus(403)
    }else{
        res.send("Hander response")
    }
res.send("hander response");
    
});

app.listen(3000, () =>{
console.log("app is running on port:3000...")
})
