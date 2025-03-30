const Book = require("../models/book");

class BookController {
  async getAllBooks(req, res) {
    try {
      const books = await Book.find().sort({ title: 1 });
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch books" });
    }
  }

  async getBooksCreatedThisYear(req, res) {
    try {
      const currentYear = new Date().getFullYear();
      const books = await Book.find({ publishing_year: currentYear }).sort({
        title: 1,
      });

      res.status(200).json(books);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch books created this year" });
    }
  }

  async getAuthorsWithAtLeastFiveBooks(req, res) {
    try {
      const authors = await Book.aggregate([
        { $group: { _id: "$author_full_name", bookCount: { $sum: 1 } } },
        { $match: { bookCount: { $gte: 5 } } },
      ]);

      res.status(200).json(authors);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch authors with at least 5 books" });
    }
  }

  async getProgrammingBooksInTechnology(req, res) {
    try {
      const books = await Book.find({
        title: { $regex: "programming", $options: "i" },
        genre: "Technology",
      }).sort({ title: 1 });

      res.status(200).json(books);
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Failed to fetch programming books in Technology genre",
        });
    }
  }

  async getBooksWithSpecificFields(req, res) {
    try {
      const books = await Book.find(
        {},
        "title author_full_name publishing_year num_of_favorites"
      ).sort({ title: 1 });

      res.status(200).json(books);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch books with specific fields" });
    }
  }
}

module.exports = new BookController();
