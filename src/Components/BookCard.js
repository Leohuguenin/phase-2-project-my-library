import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {

    return (
        <div className="book-card">
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <Link to={`/books/${book.id}`}>
                <h3>{book.volumeInfo.title.length > 60 ? book.volumeInfo.title.slice(0, 60) + "..." : book.volumeInfo.title}</h3>
            </Link>
        </div>
    );
}

export default BookCard;