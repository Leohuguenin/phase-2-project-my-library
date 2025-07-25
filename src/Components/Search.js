import React, { useState } from "react";

function Search({ onSearchClick }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    
    return (
        <div className="search-container">
            <h4> Search books</h4>
            <input
                type="text"
                placeholder="Enter book title"
                className="search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => onSearchClick(searchTerm)}>🔍</button>
        </div>
    )
}

export default Search;