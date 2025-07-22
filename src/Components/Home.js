import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import Search from "./Search";
import Sort from "./Sort";
import NewBookForm from "./NewBookForm";

function Home({ onAddToReadingList, readingList, customBooks, onAddCustomBook }) {
    const [books, setBooks] = useState([]);
    const match = useRouteMatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("All");
    const [googleBooks, setGoogleBooks] = useState([]);

    let allBooks = [...customBooks, ...googleBooks];

    allBooks = allBooks.filter((b) =>
        b.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <NewBookForm onAddBook={onAddCustomBook} />
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
