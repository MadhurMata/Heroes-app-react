import React from 'react';
import PropTypes from 'prop-types';

function Button({ action, styles, textContent, label }) {
  return (
    <div
      className="button"
      aria-label={label}
      role="button"
      tabIndex={0}
      onClick={() => action()}
      onKeyDown={() => action()}>
      <p>{textContent}</p>
      <span className={'icon ' + styles}></span>
    </div>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  styles: PropTypes.string,
  textContent: PropTypes.string
};

export default Button;
