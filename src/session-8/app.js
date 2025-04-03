import mongoose from "mongoose";
import express from "express";
import { CreateNewUser, DeleteUserByID, GetAllUsers, GetUserById, UpdateUserById } from "./routes/users.js";


await mongoose.connect("mongodb+srv://socode:socode@cluster0.fhwq9ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("Connection Created....")
const db = mongoose.connection;

db.on("error", () => {console.log("Connection Error")})

db.on("open", () => {
    // example: send connection opject somewhere, export it maybe.
    console.log("Connection Established.")
});

const app  = express()

app.use(express.json())

// Get All Users.
app.get("/user", GetAllUsers)

// Get User by id.
app.get("/user/:id", GetUserById) 

// Create new User.
app.post("/user", CreateNewUser)

// Update user by id.
app.put("/user/:id", UpdateUserById)

// Delete user by id.
app.delete("/user/:id", DeleteUserByID)


app.listen(3000, ()=>{
    console.log("Express Server is running at localhost:3000")
})