import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {

    return (
        <>
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <Link to={`/books/${book.id}`} className="book-card">
                <h3>{book.volumeInfo.title}</h3>
            </Link>
        </>
    );
}

export default BookCard;