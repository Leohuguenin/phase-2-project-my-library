import React, { useState } from "react";
import BookCard from "./BookCard";
import { addNewBook } from "../data/customBooksAPI";

const clearFormData = {
  title: "",
  authors: "",
  description: "",
  publisher: "",
  publishedDate: "",
  pageCount: "",
  category: "",
};

function NewBookForm({ onAddBook, customBooks }) {
  const [formData, setFormData] = useState(clearFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      volumeInfo: {
        title: formData.title,
        authors: formData.authors.split(",").map((a) => a.trim()),
        description: formData.description,
        publisher: formData.publisher,
        publishedDate: formData.publishedDate,
        pageCount: parseInt(formData.pageCount, 10),
        categories: [formData.category],
        imageLinks: { thumbnail: "" },
      },
    };

    addNewBook(newBook).then(book => {
      onAddBook(book);
      setFormData(clearFormData);
    });
  }

  return (
    <>
    <form className="new-book-form" onSubmit={handleSubmit}>
      <h4>Can't find a book? Add yours:</h4>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="authors"
        value={formData.authors}
        onChange={handleChange}
        placeholder="Authors (comma-separated)"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="publisher"
        value={formData.publisher}
        onChange={handleChange}
        placeholder="Publisher"
      />
      <input
        name="publishedDate"
        value={formData.publishedDate}
        onChange={handleChange}
        placeholder="Published Date"
      />
      <input
        name="pageCount"
        value={formData.pageCount}
        onChange={handleChange}
        placeholder="Page Count"
        type="number"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button className="btn add-new-book" type="submit">Add Book</button>
    </form>
  <div className="added-by-you">
    <h4>Added by you:</h4>
    {customBooks.map((book) => <BookCard  key={book.id} book={book} />)}
  </div>
  </>
 ) 
}


export default NewBookForm;
