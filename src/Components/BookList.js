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
            <h2>Book search</h2>

            <div className="book-list">
                <button className="btn back" onClick={handleBackButtonClick} >Back</button>
                {books.slice(startIndex, endIndex).map(book => <BookCard key={book.id} book={book} />
                )}
                <button className="btn next" onClick={handleNextButtonClick} >Next</button>
            </div>
        </>
    )
}


export default BookList;