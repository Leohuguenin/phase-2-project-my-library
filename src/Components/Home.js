import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import FromReadingList from "./FromReadingList";
import Search from "./Search";
import Sort from "./Sort";
import fetchGoogleBooks from "../data/googleBooksAPI";

function Home({ onAddToReadingList, readingList, customBooks }) {
    const [sort, setSort] = useState("All");
    const [googleBooks, setGoogleBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isShowBookInfo, setIsShowBookInfo] = useState(false);


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

    function showBookInfo(book) {
        setSelectedBook(book);
        setIsShowBookInfo(true);
    };

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
                <BookList books={allBooks} showBookInfo={showBookInfo} />
                {isShowBookInfo &&
                    <BookInfo
                        book={selectedBook}
                        readingList={readingList}
                        onAddToReadingList={onAddToReadingList}
                    />}
            </div>

        </div>
    );
}

export default Home;
