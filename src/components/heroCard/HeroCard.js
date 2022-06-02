import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/button/Button';
import ImageContainer from 'components/imageContainer/ImageContainer';

function HeroCard({ hero }) {
  const { thumbnail, name, description, id } = hero;
  let navigate = useNavigate();

  return (
    <div className="card">
      <ImageContainer
        url={`${thumbnail.path}.${thumbnail.extension}`}
        altSource={name}
        stylesProp="card-img-container"
      />
      <div className="card-text-container">
        <div className="info-container">
          <h2 className="truncate">{name}</h2>
          <p className="truncate-multipleLine">
            {description !== '' ? description : '(No description available)'}
          </p>
        </div>
        <Button
          action={() => {
            navigate(`/${name}/${id}`);
          }}
          textContent="Read more"
          styles="icon-arrow"
          label="Read more"
        />
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  hero: PropTypes.shape({
    thumbnail: PropTypes.PropTypes.exact({
      extension: PropTypes.string,
      path: PropTypes.string
    }),
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
  })
};

export default HeroCard;
