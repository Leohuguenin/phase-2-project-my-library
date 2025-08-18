import React from "react";
import BookCard from "./BookCard";


function BookList({ books }) {

    return (
        <>
            <h2>Book search</h2>
            <div className="book-list">
                {books.slice(0, 4).map(book => <BookCard key={book.id} book={book} />
                )}
            </div>
        </>
    )
}


export default BookList;