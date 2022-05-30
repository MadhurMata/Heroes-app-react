import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button/Button';

function HeroeCard({ heroe }) {
  const { thumbnail, name, description, id } = heroe;
  let navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} className="App-logo" alt={name} />
      </div>
      <div className="card-text-container">
        <div className="info-container">
          <h5 className="truncate">{name}</h5>
          <p className="truncate-multipleLine">
            {description !== '' ? description : '(No description available)'}
          </p>
        </div>
        <Button
          action={() => {
            navigate(`/${name}/${id}`);
          }}
          textContent="Read more"
          imageUrl="icon-arrow"
        />
      </div>
    </div>
  );
}

export default HeroeCard;
