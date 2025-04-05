import { BookModel } from "../models/books";

// GET all books with filtering & pagination
const getBooks = async (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  const filter = category ? { category } : {};
  try {
    const books = await BookModel.find(filter)
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// GET single book
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// POST new book
const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};

// PUT update book
const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

export  {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
