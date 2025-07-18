import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Sort from "./Sort";
import ReadingList from "./ReadingList";
import Search from "./Search";
import BookInfo from "./BookInfo";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sort" component={Sort} />
        <Route path="/reading-list" component={ReadingList} />
        <Route path="/search" component={Search} />
        <Route path="/books/:booksId" component={BookInfo} />
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
