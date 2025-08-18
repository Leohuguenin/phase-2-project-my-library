import React, { useState } from "react";
import BookCard from "./BookCard";

function ReadingList({ readingList, onRemoveFromReadingList }) {
  const [statusByBookId, setStatusByBookId] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  function handleNextButtonClick() {
    setStartIndex(startIndex + 3);
    setEndIndex(endIndex + 3);
  }

  function handleBackButtonClick() {
    if (startIndex !== 0) {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    }
  }


  function handleStatusClick(bookId, status) {
    setStatusByBookId((prev) => ({
      ...prev,
      [bookId]: status,
    }));
  }



  return (
    <div className="reading-list">
      <h2>Reading list</h2>
      <div className="reading-list-books">
      <button className="btn back" onClick={handleBackButtonClick} >Back</button>
        {readingList.slice(startIndex, endIndex).map((book) => (
          <div key={book.id} className="reading-book">
            <BookCard book={book} />
            <button
              className="btn remove-from-reading-list"
              onClick={() => onRemoveFromReadingList(book)}
            >
              Remove
            </button>
            <button
              onClick={() => handleStatusClick(book.id, "read")}
              className={`btn read ${statusByBookId[book.id] === "read" ? "active" : ""
                }`}
            >Read
            </button>
            <button
              onClick={() => handleStatusClick(book.id, "currently-reading")}
              className={`btn currently-reading ${statusByBookId[book.id] === "currently-reading" ? "active" : ""
                }`}
            >Currently reading
            </button>
            <button
              onClick={() => handleStatusClick(book.id, "want-to-read")}
              className={`btn want-to-read ${statusByBookId[book.id] === "want-to-read" ? "active" : ""
                }`}
            >Want to read
            </button>
          </div>
         ))}
         <button className="btn next" onClick={handleNextButtonClick} >Next</button>
      </div>
    </div>
  );
}

export default ReadingList;
