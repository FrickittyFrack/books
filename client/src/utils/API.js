import axios from "axios";

export default {
  // Get all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Get all saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Delete a book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
