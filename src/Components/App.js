import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ReadingList from "./ReadingList";




function App() {
  
  const [readingList, setReadingList] = useState([]);

  function addToReadingList(book) {
    if (!readingList.find(item => item.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  }
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" render={() => <Home onAddToReadingList={addToReadingList} />} />
        <Route path="/reading-list" render={() => <ReadingList readingList={readingList} />} />
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
