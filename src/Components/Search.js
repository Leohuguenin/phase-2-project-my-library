import React from "react";

function Search({ onSearchChange }) {
    return (
        <div className="search-container">
            <h4>🔍 Search books</h4>
            <input
                type="text"
                placeholder="Enter book title"
                className="search-input"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default Search;