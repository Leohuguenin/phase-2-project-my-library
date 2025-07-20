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
                <h4>{book.volumeInfo.title.length > 60 ? book.volumeInfo.title.slice(0, 60) + "..." : book.volumeInfo.title}</h4>
            </Link>
        </div>
    );
}

export default BookCard;