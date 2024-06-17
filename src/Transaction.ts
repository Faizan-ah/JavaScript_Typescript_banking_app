import { ERR_INVALID_NUMBER } from "./Utility/constants";

export default class Transaction {
  amount: number;
  date: Date;

  constructor(amount: number, date: Date) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    this.amount = amount;
    this.date = date;
  }
}
