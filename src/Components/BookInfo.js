import React from "react";
import { useParams } from "react-router-dom";

function BookInfo({ books }) {
    const { bookId } = useParams();
    const book = books.find((book) => book.id === bookId);

    return (
        <div className="book-info">
            <h2>{book.volumeInfo.title}</h2>
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(", ")}</p>
            <p><strong>Description:</strong> {book.volumeInfo.description || "No description available."}</p>
            <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
            <p><strong>Published date:</strong> {book.volumeInfo.publishedDate}</p>
            <p><strong>Number of pages:</strong> {book.volumeInfo.pageCount}</p>
        </div>
    );
}

export default BookInfo;
