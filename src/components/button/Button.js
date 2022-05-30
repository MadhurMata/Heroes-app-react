import React from 'react';

function Button({ action, imageUrl, textContent }) {
  return (
    <div
      className="button"
      role="button"
      tabIndex={0}
      onClick={() => action()}
      onKeyDown={() => action()}>
      <p>{textContent}</p>
      <span className={'icon ' + imageUrl}></span>
    </div>
  );
}

export default Button;
