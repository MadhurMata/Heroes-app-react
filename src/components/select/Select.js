import React from 'react';

function Select({ updateSelect, selectOptions }) {
  return (
    <label className="select-custom">
      <select
        name="select"
        className="select-custom__select"
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

export default Select;
