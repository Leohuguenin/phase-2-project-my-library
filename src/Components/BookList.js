import React, { useState } from "react";
import BookCard from "./BookCard";


function BookList({ books }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    function handleNextButtonClick() {
        setStartIndex(startIndex + 4);
        setEndIndex(endIndex + 4);
    }
    
    function handleBackButtonClick() {
        if (startIndex !== 0) {
            setStartIndex(startIndex - 4);
            setEndIndex(endIndex - 4);
        }
    }


    return (
        <>
            <h2>Featured Books</h2>
            <div className="book-list">
                <button onClick={handleBackButtonClick} >Back button</button>
                {books.slice(startIndex, endIndex).map(book => <BookCard key={book.id} book={book}/>
                )}
                <button onClick={handleNextButtonClick} >Next button</button>
            </div>
        </>
    )
}


export default BookList;