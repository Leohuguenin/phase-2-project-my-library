import React from "react";
import { useParams } from "react-router-dom";

function BookInfo({ books }) {
    const { bookId } = useParams();
    const book = books.find(b => b.id === bookId);
  
    if (!book) {
      return <p>Book not found or loading...</p>; 
    }
  
    const info = book.volumeInfo;
  
    return (
      <div className="book-info">
        <h2>{info.title}</h2>
        <img src={info.imageLinks?.thumbnail} alt={info.title} />
        <p><strong>Authors:</strong> {info.authors?.join(", ")}</p>
        <p><strong>Description:</strong> {info.description || "No description available."}</p>
        <p><strong>Publisher:</strong> {info.publisher}</p>
        <p><strong>Published date:</strong> {info.publishedDate}</p>
        <p><strong>Number of pages:</strong> {info.pageCount}</p>
      </div>
    );
  }

  export default BookInfo;