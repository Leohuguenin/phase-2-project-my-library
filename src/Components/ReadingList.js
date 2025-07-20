import React from "react";
import BookCard from "./BookCard";

function ReadingList({ readingList }) {
    return (
        <div>
            {readingList.map(book => <BookCard key={book.id} book={book} />
            )}
        </div>
    )
}

export default ReadingList;