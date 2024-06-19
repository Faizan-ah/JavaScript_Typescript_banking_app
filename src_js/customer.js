import { ERR_INVALID_NUMBER, ERR_INVALID_STRING } from "./Utility/constants.js";

export default class Customer {
  name;
  id;
  transactions;

  constructor(name, id) {
    if (!name || typeof name !== "string" || /\d/.test(name)) {
      throw new Error(ERR_INVALID_STRING);
    }

    if (typeof id !== "number" || isNaN(id)) {
      throw new Error(ERR_INVALID_NUMBER("ID"));
    }

    this.name = name;
    this.id = id;
    this.transactions = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getTransactions() {
    return this.transactions;
  }

  getBalance() {
    const balance = this.transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);
    return balance < 0 ? 0 : balance;
  }

  addTransactions(amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    this.transactions.push({ amount, date: new Date() });
    return true;
  }
}
