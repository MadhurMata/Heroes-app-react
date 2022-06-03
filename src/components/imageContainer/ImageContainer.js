import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useIntersection } from 'hooks/useIntersection';

function ImageContainer({ url, stylesProp, altSource }) {
  const [loaded, setLoaded] = useState(false);
  const [intercepted, setIntercepted] = useState(false);
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible

  useEffect(() => {
    if (inViewport) setIntercepted(true);
  }, [inViewport]);

  return (
    <div className={stylesProp} ref={ref}>
      <img
        src={url}
        alt={altSource}
        style={loaded && intercepted ? {} : { display: 'none' }}
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
