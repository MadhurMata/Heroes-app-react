/**
 * Filters heroes array by modified year:
 * @param {array} filteredData Heroes list.
 * @param {string} selectValue Select value.
 */
export const dateFilter = (filteredData, selectValue) => {
  switch (selectValue) {
    case '1':
      filteredData = filteredData.filter((item) => item.modified < 2000);
      break;
    case '2':
      filteredData = filteredData.filter((item) => item.modified >= 2000);
      break;
    default:
      filteredData;
      break;
  }
  return filteredData;
};

/**
 * Filters heroes array by description:
 * @param {array} itemsTemp Heroes list.
 */
export const descriptionFilter = (itemsTemp) => {
  return itemsTemp.filter((item) => item.description);
};

/**
 * Filters heroes array :
 * @param {array} filteredData Heroes list.
 * @param {string} searchValue Search input value.
 */
export const searchFilter = (filteredData, searchValue) => {
  return filteredData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
};
