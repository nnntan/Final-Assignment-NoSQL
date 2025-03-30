const Book = require("../models/book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ title: 1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

exports.getBooksCreatedThisYear = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const books = await Book.find({ publishing_year: currentYear }).sort({
      title: 1,
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books created this year" });
  }
};

exports.getAuthorsWithAtLeastFiveBooks = async (req, res) => {
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
};

exports.getProgrammingBooksInTechnology = async (req, res) => {
  try {
    const books = await Book.find({
      title: { $regex: "programming", $options: "i" },
      genre: "Technology",
    }).sort({ title: 1 });

    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch programming books in Technology genre" });
  }
};

exports.getBooksWithSpecificFields = async (req, res) => {
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
};
