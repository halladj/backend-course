import mongoose from "mongoose";
import express from"express";
import {GetfilmsById,GetAllfilms,creeteFilms,Updatefilms,Deletefilms} from "./routes/filmes.js";

await mongoose.connect("mongodb+srv://rodyinfo09:rodyinfo09@cluster0.20cbzwf.mongodb.net/")
console.log("connection created...")

const db = mongoose.connection;
db.on("error",()=>{console.log("connection error")})

db.on("open",() =>{
    //example: send connection opject somewhere , export it maybe.
    console.log("connection Established.")
});



const app = express()
app.use(express.json())
//Get all films
app.use("/films",GetAllfilms)
//Get fimls by id
app.get("/films/id",GetfilmsById)
//create new films 
app.post("/films",creeteFilms)
//update films 
app.put("/films/:id",Updatefilms)
//delete filme 
app.delete("/films/:id",Deletefilms)
 

app.listen(3000,()=>{
    console.log("express server is running/3000...")
})