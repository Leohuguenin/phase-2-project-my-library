import React from "react";
import BookCard from "./BookCard";

function ReadingList({ readingList, onRemoveFromReadingList }) {
    return (
        <div>
            {readingList.map(book => <> 
            <BookCard key={book.id} book={book} />
            <button onClick={() => onRemoveFromReadingList(book)} >Remove</button>
            </>
            )}
            
            
        </div>
    )
}

export default ReadingList;