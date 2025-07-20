import React from "react";

function Sort() {
    return (
        <div className="sort-container">
            <h4>🔼 Sort books</h4>
            <select>
                <option value="All">All</option>
                <option value="Genre">Genre</option>
                <option value="Author">Author</option>
            </select>
        </div>
    )
}

export default Sort;