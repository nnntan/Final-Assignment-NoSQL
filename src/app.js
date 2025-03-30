require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nguyen Minh Tan: Hello`);
  console.log(`Server is running on port ${PORT}`);
});
