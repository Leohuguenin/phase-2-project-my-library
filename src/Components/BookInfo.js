import React, { useState } from "react";
import { useParams } from "react-router-dom";

function BookInfo({ books, onAddToReadingList }) {
    const { bookId } = useParams();
    const book = books.find(b => b.id === bookId);
    const [isAdded, setIsAdded] = useState(false);
    
    if (!book) {
        return <p>Book not found or loading...</p>;
    }

    const info = book.volumeInfo;

    function handleAddButton() {
        onAddToReadingList(book);
        setIsAdded(!isAdded);
    }


    return (
        <div className="book-info">
            <h2>{info.title}</h2>
            <div className="book-info-content">
                <img src={info.imageLinks?.thumbnail} alt={info.title} />
                <div>
                    <p><strong>Authors:</strong> {info.authors?.join(", ")}</p>
                    <p><strong>Description:</strong> {info.description || "No description available."}</p>
                    <p><strong>Publisher:</strong> {info.publisher || "No publisher available."}</p>
                    <p><strong>Published date:</strong> {info.publishedDate}</p>
                    <p><strong>Number of pages:</strong> {info.pageCount}</p>
                    <p><strong>Category:</strong> {info.categories?.join(", ")}</p>
                    {isAdded? <p>Added to Reading list!</p> :
                    <button onClick={handleAddButton} >Add to reading list</button>}
                </div>
            </div>
        </div>
    );
}

export default BookInfo;