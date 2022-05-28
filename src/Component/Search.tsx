import React, { useState, useCallback, useEffect } from 'react'

function Search() {
    return (
        <div className="filter-row d-flex flex-row align-items-center">
            {/* Search */}
            <div className="app-search header-search col-md-4">
                <span className="search-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search mr-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
                <div className="position-relative">
                    <input
                        type="search"
                        className="form-control input-search-left"
                        placeholder="City..."
                        // defaultValue={containerNo}
                        // onChange={debouncedChangeHandler}
                    />
                </div>
            </div>
            <div className="col-md-3">date</div>
            <div className="col-md-3">Time</div>
        </div>
    )
}

export default Search
