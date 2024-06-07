const express = require("express");
const cors = require("cors");

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Sun Book",
    author: "Max",
    price: "300",
    genre: "A",
    availability: 2,
  },
  {
    id: 2,
    title: "Sun Book",
    author: "Max",
    price: "500",
    genre: "A",
    availability: 3,
  },
  {
    id: 3,
    title: "Moon Book",
    author: "Sam",
    price: "500",
    genre: "B",
    availability: 4,
  },
  {
    id: 4,
    title: "Child Book",
    author: "Rone",
    price: "600",
    genre: "B",
    availability: 2,
  },
];

const purchases = [];

app.get("/books", (req, res) => {
  res.send(202, books);
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  if (book) {
    res.send(200, book);
  } else {
    res.send(404, "The book not found");
  }
});

app.get("/books/search", (req, res) => {
  const {title, author, price, availability} = req.query;

  let filteredBooks = books;

  if (title) {
    filteredBooks = filteredBooks.filter((book) => book.title == title);
  }
  if (author) {
    filteredBooks = filteredBooks.filter((book) => book.author == author);
  }
  if (price) {
    filteredBooks = filteredBooks.filter((book) => book.price == price);
  }
  if (availability) {
    filteredBooks = filteredBooks.filter(
      (book) => book.availability == availability
    );
  }
  res.send(200, filteredBooks);
});

app.post("/books/purchase/:id", (req, res) => {
  const purchaseId = req.params.id;
  const {id, title, author, price, genre} = req.body;
  const purchase = {purchaseId, id, title, author, price, genre};
  purchases.push(purchase);
  res.send(200, purchase);
});

app.get("/purchases", (req, res) => {
  res.send(200, purchases);
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  books = books.filter((book) => book.id !== id);
  res.send(200, "The book deleted successfully" + id);
});

app.put("/book/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const {title, author} = req.body;
  const book = books.find((book) => book.id === id);
  if (book) {
    book.title = title;
    book.author = author;
    res.send(200, "Updated successfully");
  } else {
    res.send(404, "The book not found");
  }
});

app.listen(port, () => {
  console.log("Server is running at port:" + port);
});
