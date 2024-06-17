export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const stringifyAndIndentArray = (arr: any): string => {
  return JSON.stringify(arr, null, 2);
};
