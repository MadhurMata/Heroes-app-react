import React from 'react';

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

export default RegularList;
