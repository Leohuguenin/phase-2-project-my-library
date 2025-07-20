import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import Search from "./Search";
import Sort from "./Sort";

function Home() {
    const [books, setBooks] = useState([]);
    const match = useRouteMatch();


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

    return (
        <div className="home-container">
            <h1>Welcome to MyLibrary</h1>
            <p>Discover new books, manage your reading list, and explore your next favorite read.</p>
            <Search />
            <Sort />
            <div className="main-content">
                <BookList books={books} />
                <Route path={`${match.url}/:bookId`}>
                    <BookInfo books={books} />
                </Route>
            </div>

        </div>
    );
}

export default Home;
