import { ERR_INVALID_NUMBER } from "./Utility/constants";

export default class Transaction {
  amount;
  date;

  constructor(amount, date) {
    if (typeof amount !== "number" || isNaN(id)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    this.amount = amount;
    this.date = date;
  }
}
