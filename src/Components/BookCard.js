import React from "react";

function BookCard({ book, onBookClick }) {
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