/**
 * Maps API response returning only needed data:
 * @param {array} heroesList List of heroes.
 */
export const mapHeroesData = (heroesList) => {
  return heroesList.map((heroe) => {
    const { name, id, description, thumbnail, modified } = heroe;
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
 * Formats date retriving the year:
 * @param {string} date Modified date.
 */
export const dateFormater = (date) => {
  return new Date(date).getFullYear();
};
