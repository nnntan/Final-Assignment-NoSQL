const mongoose = require("mongoose");
const Book = require("../models/book");
const booksData = require("../data/books.json");
const connectDB = require("../config/database");

(async () => {
  try {
    await connectDB();

    await Book.deleteMany({});
    console.log("Old data removed.");

    await Book.insertMany(booksData);
    console.log("Seed data inserted successfully.");

    await Book.collection.createIndex({ title: 1 }, (err, result) => {
      if (err) {
        console.error("Error creating index:", err);
      } else {
        console.log("Index created on title field:", result);
      }
    });

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
})();
