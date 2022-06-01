import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ checkbox = false, toggleCheckboxState, label }) {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id="checkbox"
        value={checkbox}
        checked={checkbox}
        onChange={() => toggleCheckboxState()}
        onKeyDown={() => toggleCheckboxState()}
      />
      <label htmlFor="checkbox">
        <p>{label}</p>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  checkbox: PropTypes.bool,
  toggleCheckboxState: PropTypes.func,
  label: PropTypes.string
};

export default Checkbox;
