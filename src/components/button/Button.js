import React from 'react';

function Button({ action, styles, textContent }) {
  return (
    <div
      className="button"
      role="button"
      tabIndex={0}
      onClick={() => action()}
      onKeyDown={() => action()}>
      <p>{textContent}</p>
      <span className={'icon ' + styles}></span>
    </div>
  );
}

export default Button;
