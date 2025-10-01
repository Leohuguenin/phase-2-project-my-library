import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

function BookCard({ book, onBookClick }) {
    const match = useRouteMatch();
    return (
        <div className="book-card">
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <div key={book.id} onClick={() => onBookClick(book)} style={{ cursor: 'pointer' }}>
                <h4>{book.volumeInfo.title.length > 60 ? book.volumeInfo.title.slice(0, 60) + "..." : book.volumeInfo.title}</h4>
            </div>
        </div>
    );
}

export default BookCard;