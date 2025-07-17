import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to MyLibrary</h1>
      <p>Discover new books, manage your reading list, and explore your next favorite read.</p>
      
      <div className="home-actions">
        <Link to="/search" className="home-link">🔍 Search Books</Link>
        <Link to="/sort" className="home-link">📚 Sort by Genre</Link>
        <Link to="/reading-list" className="home-link">📖 View Reading List</Link>
      </div>
    </div>
  );
}

export default Home;
