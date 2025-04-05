import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title:  String,
  description:  String, 
  price:  Number,
  stockQuantity: Number, 
  category:  String,
});

const Book = mongoose.model("Book", BookSchema);
export {Book} 
