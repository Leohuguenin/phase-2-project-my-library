import React from "react";
import BookCard from "./BookCard";


function BookList({ books }) {
    return (
        <>
            <h2>Featured Books</h2>
            <div className="book-list">
                {books.map(book => <BookCard book={book}/>
                )}
            </div>
        </>
    )
}


export default BookList;