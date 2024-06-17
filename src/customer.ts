import Transaction from "./Transaction.js";
import { ERR_INVALID_NUMBER, ERR_INVALID_STRING } from "./Utility/constants.js";

export default class Customer {
  name: string;
  id: number;
  transactions: Array<Transaction>;

  constructor(name: string, id: number) {
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

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getTransactions(): Array<Transaction> {
    return this.transactions;
  }

  getBalance(): number {
    const balance = this.transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);
    return balance < 0 ? 0 : balance;
  }

  addTransactions(amount: number): boolean {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    this.transactions.push({ amount, date: new Date() });
    return true;
  }
}
