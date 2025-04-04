// app.js
import mongoose from "mongoose";
import express from "express";
import { exampleMiddleware } from "./middlewares/random";


const bookRoutes = require('./routes/books');


await mongoose.connect("mongodb+srv://socode:socode@cluster0.fhwq9ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("Connection Created....")
const db = mongoose.connection;

db.on("error", () => {console.log("Connection Error")})

db.on("open", () => {
    // example: send connection opject somewhere, export it maybe.
    console.log("Connection Established.")
});



const app = express();
app.use(express.json());
app.use(exampleMiddleware);

app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));