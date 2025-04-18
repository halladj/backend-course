import express from"express";
import mongoose from "mongoose";
import {GetAllBook,GetBookById,CreateNewBook,UpdateBookById,DeleteBookByID}from "./routes/books.js"
import { validationMiddleware } from "./middelware/validationMiddleware.js";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

await mongoose.connect(process.env.DATABASE_URL)
console.log("connection created...")

const db = mongoose.connection;
db.on("error",()=>{console.log("connection error")})

db.on("open",() =>{
    //example: send connection opject somewhere , export it maybe.
    console.log("connection Established.")
});

const app = express()
app.use(cors())
app.use(express.static('./src/session-8/public'))
app.use(express.json());

//Get all books
app.get("/book",GetAllBook)
//Get book by id
app.get("/book/:id",GetBookById)
//create new book
app.post("/book",[validationMiddleware,CreateNewBook])
//update book 
app.put("/book/:id",UpdateBookById)
//delete book 
app.delete("/book/:id",DeleteBookByID)


app.listen(3000, () => {
    console.log("express server is running on port 3000...");
});

