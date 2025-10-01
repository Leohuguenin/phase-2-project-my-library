import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

function BookCard({ book }) {
    const match = useRouteMatch();
    return (
        <div className="book-card">
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <Link key={book.id} to={`${match.url}/${book.id}`}>
                <h4>{book.volumeInfo.title.length > 60 ? book.volumeInfo.title.slice(0, 60) + "..." : book.volumeInfo.title}</h4>
            </Link>
        </div>
    );
}

export default BookCard;