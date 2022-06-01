import React from 'react';
import PropTypes from 'prop-types';

function EventCard({ event }) {
  return (
    <>
      <p>{event.name}</p>
    </>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string
  })
};

export default EventCard;
