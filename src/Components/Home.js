import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import Search from "./Search";
import Sort from "./Sort";

function Home({ onAddToReadingList, readingList }) {
    const [books, setBooks] = useState([]);
    const match = useRouteMatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("All");
    let filteredBooks = books.filter(book =>
        book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sort === "Category") {
        filteredBooks = [...filteredBooks].sort((a, b) => {
            const categoryA = a.volumeInfo.categories?.[0] || "";
            const categoryB = b.volumeInfo.categories?.[0] || "";
            return categoryA.localeCompare(categoryB);
        });
    } else if (sort === "Author") {
        filteredBooks = [...filteredBooks].sort((a, b) => {
            const authorA = a.volumeInfo.authors?.[0] || "";
            const authorB = b.volumeInfo.authors?.[0] || "";
            return authorA.localeCompare(authorB);
        });
    }



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

    function handleSortChange(e) {
        setSort(e.target.value);
    }

 
    return (
        <div className="home-container">
            <h1>Welcome to MyLibrary</h1>
            <p>Discover new books, manage your reading list, and explore your next favorite read.</p>
            <div className="search-sort-bar">
                <Search onSearchChange={handleSearchChange} />
                <Sort onSortChange={handleSortChange} />
            </div>
            <div className="main-content">
                <BookList books={filteredBooks} />
                <Route path={`${match.url}/:bookId`}>
                    <BookInfo 
                    books={filteredBooks}
                    onAddToReadingList={onAddToReadingList}
                    readingList={readingList} />
                </Route>
            </div>

        </div>
    );
}

export default Home;
