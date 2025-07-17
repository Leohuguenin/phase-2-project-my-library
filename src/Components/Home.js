import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=fiction")
            .then(res => res.json())
            .then(data => {
                setBooks(data.items.slice(0, 6));
            })
            .catch(err => {
                console.error("Error fetching books:", err);
            });
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to MyLibrary</h1>
            <p>Discover new books, manage your reading list, and explore your next favorite read.</p>

            <div className="home-actions">
                <Link to="/search" className="home-link">🔍 Search Books</Link>
                <Link to="/sort" className="home-link">📚 Sort by Genre</Link>
                <Link to="/reading-list" className="home-link">📖 View Reading List</Link>
            </div>

            <h2>Featured Books</h2>
            <div className="book-list">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
