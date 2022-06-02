import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <h1>Heroes App</h1>
      {location.pathname === '/' ? null : (
        <div
          className="back-button"
          onClick={() => navigate('/')}
          role="button"
          tabIndex={0}
          onKeyDown={() => navigate('/')}>
          <p>Home</p>
        </div>
      )}
    </header>
  );
}

export default Header;
