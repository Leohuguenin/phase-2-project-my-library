import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ReadingList from "./ReadingList";




function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" component={Home} />
        <Route path="/reading-list" component={ReadingList} />
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
