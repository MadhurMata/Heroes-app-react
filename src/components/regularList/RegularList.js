import React from 'react';
import PropTypes from 'prop-types';

const RegularList = ({
  items,
  emptyItemsMessage,
  resourceName,
  itemComponent: ItemComponent,
  styles
}) => {
  if (items.length === 0)
    return (
      <>
        <h5>{emptyItemsMessage}</h5>
      </>
    );
  return (
    <div className={styles}>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

RegularList.propTypes = {
  emptyItemsMessage: PropTypes.string,
  resourceName: PropTypes.string,
  itemComponent: PropTypes.func,
  styles: PropTypes.string
};

export default RegularList;
