import React from "react";

function Sort() {
    return (
        <div className="sort-container">
            <h4>🔼 Sort by</h4>
            <select className="sort-select">
                <option value="All">All</option>
                <option value="Category">Category</option>
                <option value="Author">Author</option>
            </select>
        </div>
    )
}

export default Sort;