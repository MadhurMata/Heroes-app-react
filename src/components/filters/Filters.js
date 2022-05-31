import React, { useState, useEffect, useContext } from 'react';

import Searchbar from 'components/searchbar/Searchbar';
import Button from 'components/button/Button';
import Checkbox from 'components/checkbox/Checkbox';
import Select from 'components/select/Select';

import { TreesContext } from 'pages/home/Home';
import { dateFilter, descriptionFilter, searchFilter } from 'common/utils/utils';

const selectOptions = ['Filter by date (Not filtered)', '20 century', '21 century'];

function Filters() {
  const [items, itemsTemp, setItems] = useContext(TreesContext) || [];
  const [showFilter, setShowFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    if (items) filter();
  }, [checkbox, searchValue, selectValue]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const toggleCheckboxState = () => {
    setCheckbox(!checkbox);
  };

  const updateSelect = (value) => {
    setSelectValue(value);
  };

  /* Filters array of heroes everytime one of the inputs changes */
  const filter = () => {
    let filteredData = checkbox ? descriptionFilter(itemsTemp) : itemsTemp;
    filteredData = dateFilter(filteredData, selectValue);
    filteredData = searchValue ? searchFilter(filteredData, searchValue) : filteredData;

    setItems(filteredData);
  };

  return (
    <div className="filter">
      <div className="filter_shown">
        <Searchbar handleChange={updateSearchValue} searchValue={searchValue} />
        <Button action={toggleFilter} textContent="Filter" imageUrl="icon-filter" />
      </div>
      {showFilter ? (
        <div className="filter_hidden">
          <Checkbox
            toggleCheckboxState={toggleCheckboxState}
            checkbox={checkbox}
            label="Heroes with description only"
          />
          <Select updateSelect={updateSelect} selectOptions={selectOptions} />
        </div>
      ) : null}
    </div>
  );
}

export default Filters;