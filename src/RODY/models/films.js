import mongoose from "mongoose";

const FilmsShema = new mongoose.Schema({
    title:String,
    director: String, 
    year: Number, 
    actors : [String],
    rating:String
})
 const films = mongoose.model("films",FilmsShema)
 export{films}