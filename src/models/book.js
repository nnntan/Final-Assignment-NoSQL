const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author_full_name: { type: String, required: true },
  publishing_year: { type: Number, required: true },
  genre: { type: String, required: true },
  num_of_favorites: { type: Number, default: 0 },
});

module.exports = mongoose.model("Book", bookSchema);
