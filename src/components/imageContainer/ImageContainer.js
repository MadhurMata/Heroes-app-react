import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageContainer({ url, stylesProp, altSource }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={stylesProp}>
      <img
        src={url}
        alt={altSource}
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

ImageContainer.propTypes = {
  url: PropTypes.string,
  stylesProp: PropTypes.string,
  altSource: PropTypes.string
};

export default ImageContainer;
