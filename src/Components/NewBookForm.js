import React, { useState } from "react";

function NewBookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    description: "",
    publisher: "",
    publishedDate: "",
    pageCount: "",
    category: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
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

    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddBook(data);
        setFormData({
          title: "",
          authors: "",
          description: "",
          publisher: "",
          publishedDate: "",
          pageCount: "",
          category: "",
        });
      });
  }

  return (
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
  );
}

export default NewBookForm;
