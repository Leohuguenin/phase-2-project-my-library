import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import Search from "./Search";
import Sort from "./Sort";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=a")
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
            <Search />
            <Sort />
            <BookList books={books} />
            
        </div>
    );
}

export default Home;
