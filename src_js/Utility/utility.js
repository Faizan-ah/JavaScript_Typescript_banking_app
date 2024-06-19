export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const stringifyAndIndentArray = (array) => {
  return JSON.stringify(array, null, 2);
};
