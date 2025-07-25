import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import Search from "./Search";
import Sort from "./Sort";
import NewBookForm from "./NewBookForm";
import fetchBooks from "../data/fetchBooks";

function Home({ onAddToReadingList, readingList, customBooks, onAddCustomBook }) {
    const match = useRouteMatch();
    const [sort, setSort] = useState("All");
    const [googleBooks, setGoogleBooks] = useState([]);

    let allBooks = [...customBooks, ...googleBooks];

    if (sort === "Category") {
        allBooks = [...allBooks].sort((a, b) => {
            const A = a.volumeInfo.categories?.[0] || "";
            const B = b.volumeInfo.categories?.[0] || "";
            return A.localeCompare(B);
        });
    } else if (sort === "Author") {
        allBooks = [...allBooks].sort((a, b) => {
            const A = a.volumeInfo.authors?.[0] || "";
            const B = b.volumeInfo.authors?.[0] || "";
            return A.localeCompare(B);
        });
    }

    useEffect(() => {
        fetchBooks("a").then(books => {
            setGoogleBooks(books);
          });
    }, []);

    function handleSearchClick(search) {
        fetchBooks(search).then(books => {
            setGoogleBooks(books);
          });
    }

    function handleSortChange(e) {
        setSort(e.target.value);
    }


    return (
        <div className="home-container">
            <h1>Welcome to MyLibrary</h1>
            <p>Discover new books, manage your reading list, and explore your next favorite read.</p>
            <div className="search-sort-bar">
                <Search onSearchClick={handleSearchClick} />
                <Sort onSortChange={handleSortChange} />
            </div>
            <div className="new-book-form">
                <NewBookForm onAddBook={onAddCustomBook} />
            </div>
            <div className="main-content">
                <BookList books={allBooks} />
                <Route path={`${match.url}/:bookId`}>
                    <BookInfo
                        books={allBooks}
                        onAddToReadingList={onAddToReadingList}
                        readingList={readingList} />
                </Route>
            </div>

        </div>
    );
}

export default Home;
