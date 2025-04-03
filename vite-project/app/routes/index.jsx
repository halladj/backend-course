import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams} from "react-router-dom";
import {Card, CardContent, CardActions, Typography} from "@mui/material";
import {Button, TextField, AppBar, Toolbar, Container} from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow: 1}}>Book Store</Typography>
        <Link to="/" style={{color: "white", marginRight: "15px", textDecoration: "none"}}>Products</Link>
        <Link to="/liked" style={{color: "white", marginRight: "15px", textDecoration: "none"}}>Liked</Link>
        <Link to="/about" style={{color: "white", marginRight: "15px", textDecoration: "none"}}>About Us</Link>
        <Link to="/add-book" style={{color: "white", textDecoration: "none"}}>Add Book</Link>
      </Toolbar>
    </AppBar>
  );
}

function Products() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" sx={{margin: "20px 0"}}>Products</Typography>
      <TextField
        fullWidth
        label="Search for books..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{marginBottom: "20px"}}
      />
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px"}}>
        {filteredBooks.map((book) => (
          <Card key={book.id}>
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
              <Typography color="textSecondary">by {book.author}</Typography>
              <Typography variant="body1" fontWeight="bold" mt={1}>{book.price}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth component={Link} to={`/book/${book.id}`}>View Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}

function BookDetails() {
  const {id} = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{margin: "20px 0"}}>{book.title}</Typography>
      <Typography variant="h6" color="textSecondary">by {book.author}</Typography>
      <Typography variant="body1" mt={2}>{book.description}</Typography>
      <Typography variant="h5" mt={2} fontWeight="bold">Price: {book.price}</Typography>
      <Button variant="contained" sx={{marginTop: "20px"}}>Buy Now</Button>
    </Container>
  );
}

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title, author, price}),
    }).then(() => navigate("/"));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{margin: "20px 0"}}>Add a New Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} sx={{marginBottom: "10px"}} />
        <TextField fullWidth label="Author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)} sx={{marginBottom: "10px"}} />
        <TextField fullWidth label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} sx={{marginBottom: "10px"}} />
        <Button type="submit" variant="contained" fullWidth>Add Book</Button>
      </form>
    </Container>
  );
}

export default function BookStore() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

