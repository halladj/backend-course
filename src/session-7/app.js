import express from "express";


const app = express()

const date = new Date()

const Middleware = (req, res, next) => {
    console.log(`Request received at: ${date.toISOString()} for ${req.method}: ${req.url}`)
    next()
}
app.use(Middleware)

app.use( (req, res, next) => {
    console.log("middleware No1.")
    req.isAuth = false
    next()
} );

app.get("/", (req, res) => {
    console.log("Handler msg");
    if (!req.isAuth){
        res.sendStatus(403)
    }else{

        res.send("Handler response");
    }
});


app.listen(3000, () => {
    console.log("Server Running on locahost:3000...")
})