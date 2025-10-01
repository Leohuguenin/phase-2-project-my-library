import React from "react";


function BookInfo({ book, onAddToReadingList, readingList }) {
  
    if (!book || !book.volumeInfo) {
      return <p>Book not found or still loading...</p>;
    }
  
    const info = book.volumeInfo;
    const isAlreadyAdded = readingList?.some(item => item.id === book.id);
  
    function handleAddButton() {
      onAddToReadingList(book);
    };
  
    return (
      <div className="book-info">
        <h2>{info.title}</h2>
        <div className="book-info-content">
          <img src={info.imageLinks?.thumbnail} alt={info.title} />
          <div>
            <p><strong>Authors:</strong> {info.authors?.join(", ")}</p>
            <p><strong>Description:</strong> {info.description?.slice(0, 100)}...</p>
            <p><strong>Publisher:</strong> {info.publisher}</p>
            <p><strong>Published:</strong> {info.publishedDate}</p>
            <p><strong>Pages:</strong> {info.pageCount}</p>
            <p><strong>Category:</strong> {info.categories?.join(", ")}</p>
            {isAlreadyAdded ? (
              <p>✅ Added to Reading list</p>
            ) : (
              <button className="btn add-to-reading-list" onClick={handleAddButton}>Add to Reading List</button>
            )}
          </div>
        </div>
      </div>
    );
  }
  

export default BookInfo;