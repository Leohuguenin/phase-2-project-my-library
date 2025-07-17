import React from "react";

function Search() {
    return (
        <div>
            <h2>Search for Books</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter book title"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;