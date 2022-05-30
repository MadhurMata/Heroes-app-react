import React from 'react';

function EventCard({ event }) {
  return (
    <div>
      <p>{event.name}</p>
    </div>
  );
}

export default EventCard;
