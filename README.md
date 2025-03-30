# Final Assignment - NoSQL

## NGUYEN MINH TAN

This is a Node.js application using MongoDB for managing a collection of books.

## Features

- Query books by specific criteria.
- Seed the database with sample data.

## Project Structure

- **src/app.js**: Main application entry point.
- **src/config/database.js**: MongoDB connection setup.
- **src/models/book.js**: Mongoose schema for books.
- **src/controllers/booksController.js**: Logic for handling book-related operations.
- **src/routes/books.js**: API routes for books.
- **src/seed/seed.js**: Script to populate the database with sample data.
- **src/data/books.json**: Sample book data.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
   git clone <repository-url>
```

2. Install dependencies:

```bash
npm i express mongoose dotenv
```

3. Set up environment variables in `.env`:

```bash
PORT=3000
MONGODB_URI='mongodb://localhost:27017/books_store'
```

## Seeding the Database

Run the following command to populate the database with sample data:

```bash
node src/seed/seed.js
```

## Usage

1. Start the server:

```bash
node src/app.js
```

2. Access the API at `http://localhost:3000/api/books`.

## API Endpoints

- `GET /api/books`: Fetch all books.
- `GET /api/books/created-this-year`: Get books created in the current year.
- `GET /api/books/authors-with-5-books`: Get authors with at least 5 books.
- `GET /api/books/programming-in-technology`: Get programming books in the Technology genre.
- `GET /api/books/specific-fields`: Get books with specific fields.

## License

This project is licensed under the ISC License.
