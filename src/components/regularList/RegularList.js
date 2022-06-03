import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const RegularList = ({
  items,
  emptyItemsMessage,
  resourceName,
  itemComponent: ItemComponent,
  styles
}) => {
  if (items.length === 0) return <ErrorMessage message={emptyItemsMessage} />;
  return (
    <div className={styles}>
      {items.map((item) => (
        <ItemComponent key={'item-' + item.name} {...{ [resourceName]: item }} />
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
