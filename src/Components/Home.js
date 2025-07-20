import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import Search from "./Search";
import Sort from "./Sort";

function Home() {
    const [books, setBooks] = useState([]);
    const match = useRouteMatch();
    const [searchTerm, setSearchTerm] = useState("");
    let filteredBooks = books.filter(book =>
        book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=a")
            .then(res => res.json())
            .then(data => {
                setBooks(data.items.slice(0, 10));
            })
            .catch(err => {
                console.error("Error fetching books:", err);
            });
    }, []);

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="home-container">
            <h1>Welcome to MyLibrary</h1>
            <p>Discover new books, manage your reading list, and explore your next favorite read.</p>
            <div className="search-sort-bar">
                <Search onSearchChange={handleSearchChange} />
                <Sort />
            </div>
            <div className="main-content">
                <BookList books={filteredBooks} />
                <Route path={`${match.url}/:bookId`}>
                    <BookInfo books={filteredBooks} />
                </Route>
            </div>

        </div>
    );
}

export default Home;
