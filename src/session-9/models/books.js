import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  category: String
});


const BookModel = mongoose.model("Books", bookSchema);
export {BookModel}