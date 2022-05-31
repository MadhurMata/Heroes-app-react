/**
 * Maps API response returning only needed data:
 * @param {array} heroesList List of heroes.
 */
export const mapHeroesData = (heroesList) => {
  return heroesList.map((hero) => {
    const { name, id, description, thumbnail, modified } = hero;
    return {
      id,
      name,
      description,
      thumbnail,
      modified: dateFormater(modified)
    };
  });
};

/**
 * Maps API response returning only needed data:
 * @param {object} hero Hero data.
 */
export const mapHeroData = (hero) => {
  const { name, description, thumbnail, events, modified } = hero;

  return {
    name,
    description,
    thumbnail,
    events,
    modified: dateFormater(modified)
  };
};

/**
 * Formats date retriving the year:
 * @param {string} date Modified date.
 */
export const dateFormater = (date) => {
  return new Date(date).getFullYear();
};

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
