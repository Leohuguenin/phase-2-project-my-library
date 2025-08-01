import React from "react";
import BookCard from "./BookCard";

function ReadingList({ readingList, onRemoveFromReadingList }) {
  return (
    <div className="reading-list">
      <h2>Reading list</h2>
      <div className="reading-list-books">
        {readingList.map((book) => (
          <div key={book.id} className="reading-book">
            <BookCard book={book} />
            <button
              className="btn remove-from-reading-list"
              onClick={() => onRemoveFromReadingList(book)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
