const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Get all books
router.get("/", booksController.getAllBooks);

// Get books created this year
router.get("/created-this-year", booksController.getBooksCreatedThisYear);

// Get authors with at least 5 books
router.get(
  "/authors-with-5-books",
  booksController.getAuthorsWithAtLeastFiveBooks
);

// Get programming books in Technology genre
router.get(
  "/programming-in-technology",
  booksController.getProgrammingBooksInTechnology
);

// Get books with specific fields
router.get("/specific-fields", booksController.getBooksWithSpecificFields);

module.exports = router;
