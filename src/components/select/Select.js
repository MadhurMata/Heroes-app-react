import React from 'react';
import PropTypes from 'prop-types';

function Select({ updateSelect, selectOptions, selectValue }) {
  return (
    <label className="select-custom">
      <select
        name="select"
        className="select-custom__select"
        value={selectValue}
        onChange={(e) => updateSelect(e.target.value)}>
        {selectOptions &&
          selectOptions.map((option, i) => (
            <option key={i} value={i}>
              {option}
            </option>
          ))}
      </select>
      <div className="select-custom__caret"></div>
    </label>
  );
}

Select.propTypes = {
  updateSelect: PropTypes.func,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  selectValue: PropTypes.string
};

export default Select;
