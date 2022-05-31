import React from 'react';

function Checkbox({ checkbox = false, toggleCheckboxState, label }) {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id="checkbox2"
        value={checkbox}
        onChange={() => toggleCheckboxState()}
        onKeyDown={() => toggleCheckboxState()}
      />
      <label htmlFor="checkbox2">
        <p>{label}</p>
      </label>
    </div>
  );
}

export default Checkbox;
