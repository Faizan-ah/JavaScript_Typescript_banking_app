import { capitalizeFirstLetter } from "./utility.js";

export const ERR_INVALID_NAME = "Value must be a string";
export const ERR_INVALID_STRING =
  "Value must be a string and cannot contain numbers";
export const ERR_INVALID_BOOLEAN = "Value must be a boolean";
export const ERR_INVALID_NUMBER = (fieldName) =>
  `${fieldName} must be a valid number`;
export const ERR_INVALID_INSTANCE = (fieldName) =>
  `${fieldName} must be an instance of ${capitalizeFirstLetter(
    fieldName
  )} class`;
export const ERR_NO_RECORD = "No record found";
export const ERR_RECORD_ALREADY_PRESENT = "Record already present";
