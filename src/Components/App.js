import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ReadingList from "./ReadingList";
import NewBookForm from "./NewBookForm";
import { fetchCustomBooks } from "../data/customBooksAPI"

function App() {

  const [readingList, setReadingList] = useState([]);
  const [customBooks, setCustomBooks] = useState([]);

  useEffect(() => {
    fetchCustomBooks().then(books => {
      setCustomBooks(books);
    });
  }, []);

  function addCustomBook(book) {
    setCustomBooks(prev => [...prev, book]);
  }

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("readingList")) || [];
    setReadingList(savedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);



  function addToReadingList(book) {
    if (!readingList.find(item => item.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  }

  function removeFromReadingList(book) {
    setReadingList(readingList.filter(item => item.id !== book.id))
  }

  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/reading-list" render={() => <ReadingList
          readingList={readingList}
          onRemoveFromReadingList={removeFromReadingList} />} />
        <Route path="/new-book-form" render={() => <NewBookForm
          onAddBook={addCustomBook}
          customBooks={customBooks}
        />} />
        <Route path="/" render={() => <Home
          onAddToReadingList={addToReadingList}
          readingList={readingList}
          customBooks={customBooks}
          onAddCustomBook={addCustomBook} />} />
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
