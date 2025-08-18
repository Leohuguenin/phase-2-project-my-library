import React from "react";
import BookCard from "./BookCard";


function FromReadingList({ readingList }) {

    return (
        <>
            <h2>From my reading list</h2>
            <div className="book-list">
                {readingList && readingList.slice(0, 4).map(book => <BookCard key={book.id} book={book} />
                )}
            </div>
        </>
    )
}


export default FromReadingList;