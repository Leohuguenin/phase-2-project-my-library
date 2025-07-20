import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ReadingList from "./ReadingList";




function App() {
  
  const [readingList, setReadingList] = useState([]);

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
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" render={() => <Home onAddToReadingList={addToReadingList} readingList={readingList}  />} />
        <Route path="/reading-list" render={() => <ReadingList readingList={readingList} />} />
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
