import React from "react";

function BookCard({ book }) {

    return (
        <div key={book.id} className="book-card">
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
        </div>
    )
}

export default BookCard;