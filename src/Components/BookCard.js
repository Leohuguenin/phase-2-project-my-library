import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function BookCard({ book }) {
    const match = useRouteMatch();

    return (
        <Link to={`${match.url}/books/${book.id}`} className="book-card">
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
        </Link>
    );
}

export default BookCard;