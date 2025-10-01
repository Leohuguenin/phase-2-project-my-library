import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import FromReadingList from "./FromReadingList";
import Search from "./Search";
import Sort from "./Sort";
import fetchGoogleBooks from "../data/googleBooksAPI";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function Home({ onAddToReadingList, readingList, customBooks }) {
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
        fetchGoogleBooks("a").then(books => {
            setGoogleBooks(books);
        });
    }, []);

    function handleSearchClick(search) {
        fetchGoogleBooks(search).then(books => {
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
            <div className="main-content">
                <FromReadingList readingList={readingList} />
                <BookList books={allBooks} />
                <Switch>
                    <Route
                        path={`${match.url}/:bookId`}
                        render={(props) => (
                            <BookInfo
                                {...props}
                                books={allBooks}
                                readingList={readingList}
                                onAddToReadingList={onAddToReadingList}
                            />
                        )}
                    />
                </Switch>
            </div>

        </div>
    );
}

export default Home;
