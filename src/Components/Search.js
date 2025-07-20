import React from "react";

function Search() {
    return (
        <div className="search-container">
            <h4>🔍 Search books</h4>
            <form className="search-form">
                <input
                    type="text"
                    placeholder="Enter book title"
                    className="search-input"
                />
            </form>
        </div>
    )
}

export default Search;