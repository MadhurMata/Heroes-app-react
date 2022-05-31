import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('params', location);

  return (
    <header className="header">
      <h1>Heroes App</h1>
      {location.pathname === '/' ? null : (
        <div
          className="back-button"
          onClick={() => navigate(-1)}
          role="button"
          tabIndex={0}
          onKeyDown={() => navigate(-1)}>
          <h5>Home</h5>
        </div>
      )}
    </header>
  );
}

export default Header;
