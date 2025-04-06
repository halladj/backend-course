const content = document.getElementById('content');

// Sample books data
const books = [
  {id: 1, title: "The Great Adventure", author: "John Doe", price: "$10", description: "An exciting journey"},
  {id: 2, title: "JavaScript Mastery", author: "Jane Smith", price: "$20", description: "A comprehensive guide"},
  {id: 3, title: "HTML and CSS", author: "Mary Johnson", price: "$15", description: "Web development basics"}
];

var likedBookscvar =[]
// Liked books list
const fetchData = async (params) =>{
  const res = await fetch("http://localhost:3000/book");

  return res
}

async function fun (){
try {

  const r = await fetchData()
  r.json().then((value)=>{
    value.forEach((item)=>books.push(item))
  })

  console.log(books)

  renderProducts()
  

}catch (err){
  console.log("error"+ err)
}
}
fun ()


// Function to render products
function renderProducts() {
  content.innerHTML = '<h2>Product List</h2>';
  const searchInput = document.createElement('input');
  searchInput.placeholder = "Search for books...";
  searchInput.addEventListener('input', filterBooks);
  content.appendChild(searchInput);

  const bookList = document.createElement('div');
  bookList.classList.add('book-list');
  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.description}</p>
      <p><strong>${book.price}</strong></p>
      <button onclick="viewDetails(${book._id})">View Details</button>
      <button onclick="toggleLike(${book._id})">Like</button>
    `;
    bookList.appendChild(bookCard);
  });
  content.appendChild(bookList);
}

// Function to filter books by search
function filterBooks(e) {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderBookList(filteredBooks);
}

// Function to render book details
function viewDetails(bookId) {
  const book = books.find(b => b.id === bookId);
  content.innerHTML = `
    <h2>${book.title}</h2>
    <p>by ${book.author}</p>
    <p>${book.description}</p>
    <p><strong>${book.price}</strong></p>
    <button onclick="renderProducts()">Back to Products</button>
  `;
}

// Function to toggle like/unlike on a book
function toggleLike(bookId) {
  const book = books.find(b => b.id === bookId);
  const index = likedBooks.indexOf(book);
  if (index === -1) {
    likedBooks.push(book); // Add to liked books
  } else {
    likedBooks.splice(index, 1); // Remove from liked books
  }
}

// Function to render liked books
function renderLikedBooks() {
  content.innerHTML = '<h2>Liked Books</h2>';
  if (likedBooks.length === 0) {
    content.innerHTML += '<p>No books liked yet.</p>';
    return;
  }

  const likedList = document.createElement('div');
  likedList.classList.add('liked-books');
  likedBooks.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p><strong>${book.price}</strong></p>
      <button onclick="viewDetails(${book.id})">View Details</button>
    `;
    likedList.appendChild(bookCard);
  });
  content.appendChild(likedList);
}

// Function to render the Add Book form
function renderAddBookForm() {
  content.innerHTML = `
    <h2>Add a New Book</h2>
    <form id="add-book-form">
      <input type="text" id="book-title" placeholder="Title" required><br><br>
      <input type="text" id="book-author" placeholder="Author" required><br><br>
      <input type="text" id="book-price" placeholder="Price" required><br><br>
      <textarea id="book-description" placeholder="Description" required></textarea><br><br>
      <button type="submit">Add Book</button>
    </form>
  `;
  document.getElementById('add-book-form').addEventListener('submit', addBook);
}

// Function to handle adding a new book
function addBook(e) {
  e.preventDefault();
  const newBook = {
    id: books.length + 1,
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
    price: document.getElementById('book-price').value,
    description: document.getElementById('book-description').value
  };
  books.push(newBook);
  renderProducts();
}

// Event Listeners for Navigation Links
document.getElementById('products-link').addEventListener('click', renderProducts);
document.getElementById('liked-link').addEventListener('click', renderLikedBooks);
document.getElementById('about-link').addEventListener('click', () => content.innerHTML = '<h2>About Us</h2><p>This is a simple online bookstore.</p>');
document.getElementById('add-book-link').addEventListener('click', renderAddBookForm);

// Initial page load
renderProducts();

