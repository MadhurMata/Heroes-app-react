import React from 'react';

import searchImg from 'assets/images/search.svg';

export default function Searchbar({ handleChange, searchValue }) {
  return (
    <div>
      <form className="searchbar-container" action="/" method="get">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Name of character"
          value={searchValue}
        />
        <div className="search-button">
          <img src={searchImg} alt="Search" />
        </div>
      </form>
    </div>
  );
}
