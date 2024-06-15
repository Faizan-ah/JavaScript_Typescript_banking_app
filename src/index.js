// ==================== Transaction ====================

export class Transaction {
  amount;
  date;

  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

// ==================== CUSTOMER ====================

export class Customer {
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

// ==================== BRANCH ====================

export class Branch {
  name;
  customers;

  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    const currentCustomers = this.customers.length;
    const isCustomerPresent = this.customers.some(
      (user) => user.id === customer.id
    );
    if (!isCustomerPresent) {
      this.customers.push(customer);
      if (this.customers.length > currentCustomers) {
        return true;
      }
      return false;
    }
    return false;
  }

  addCustomerTransaction(customerId, amount) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId
    );
    if (customerIndex !== -1) {
      const customer = this.customers[customerIndex];
      customer.addTransactions(amount);
      return true;
    }
    return false;
  }
}

// ==================== BANK ====================
export class Bank {
  name;
  branches = [];

  constructor(name) {
    this.name = name;
  }

  addBranch(branch) {
    const currentBranches = this.branches.length;
    const isBranchPresent = this.branches.some((b) => b.id === branch.id);
    if (!isBranchPresent) {
      this.branches.push(branch);
      if (this.branches.length > currentBranches) {
        return true;
      }
      return false;
    }
    return false;
  }

  addCustomer(branch, customer) {
    branch.addCustomer(customer);
    return true;
  }

  addCustomerTransaction(branch, customerId, amount) {
    branch.addCustomerTransaction(customerId, amount);
    return true;
  }

  findBranchByName(branchName) {
    return this.branches.filter((branch) => branch.name === branchName) ?? null;
  }

  checkBranch(branch) {
    return this.branches.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
    if (includeTransactions) {
      return branch.getCustomers();
    }
  }
}
