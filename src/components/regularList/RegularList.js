export const RegularList = ({
  items,
  emptyItemsMessage,
  resourceName,
  itemComponent: ItemComponent,
  styles
}) => {
  if (items.length === 0)
    return (
      <div>
        <h5>{emptyItemsMessage}</h5>
      </div>
    );
  return (
    <div className={styles}>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
