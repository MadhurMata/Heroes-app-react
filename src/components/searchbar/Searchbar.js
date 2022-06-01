import React from 'react';

import searchImg from 'assets/images/search.svg';

function Searchbar({ handleChange, searchValue }) {
  return (
    <>
      <form className="searchbar-container" action="/" method="get">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Name of character"
          value={searchValue}
        />
        <div className="search-icon">
          <img src={searchImg} alt="Search" />
        </div>
      </form>
    </>
  );
}

export default Searchbar;
