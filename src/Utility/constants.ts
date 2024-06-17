import { capitalizeFirstLetter } from "./utility.js";

export const ERR_INVALID_NAME: string = "Value must be a string";
export const ERR_INVALID_STRING: string =
  "Value must be a string and cannot contain numbers";
export const ERR_INVALID_BOOLEAN: string = "Value must be a boolean";
export const ERR_INVALID_NUMBER = (fieldName: string): string =>
  `${fieldName} must be a valid number`;
export const ERR_INVALID_INSTANCE = (fieldName: string): string =>
  `${fieldName} must be an instance of ${capitalizeFirstLetter(
    fieldName
  )} class`;
export const ERR_NO_RECORD: string = "No record found";
export const ERR_RECORD_ALREADY_PRESENT: string = "Record already present";
