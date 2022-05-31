import React, { useState } from 'react';

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

export default ImageContainer;
