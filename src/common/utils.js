/**
 * Formats date retriving the year:
 * @param {string} date Modified date.
 */
export const dateFormater = (date) => {
  return new Date(date).getFullYear();
};
