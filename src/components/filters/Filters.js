import React, { useState } from 'react';

import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';

function Filters() {
  const [showFilter, setShowFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="filter">
      <div className="filter_shown">
        <Searchbar handleChange={updateSearchValue} searchValue={searchValue} />
        <Button action={toggleFilter} textContent="Filter" imageUrl="icon-filter" />
      </div>
      {showFilter ? <div>other Filters</div> : null}
    </div>
  );
}

export default Filters;
