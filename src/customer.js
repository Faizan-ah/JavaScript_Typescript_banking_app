export default class Customer {
  name;
  id;
  transactions;

  constructor(name, id) {
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
    let balance = 0;
    this.transactions.forEach((transaction) => {
      balance += transaction.amount;
    });
    return balance < 0 ? 0 : balance;
  }

  addTransactions(amount) {
    const currentTransactions = this.transactions.length;
    const newTransaction = {
      amount,
      date: new Date(),
    };
    this.transactions.push(newTransaction);
    if (this.transactions.length > currentTransactions) {
      return true;
    }
    return false;
  }
}
