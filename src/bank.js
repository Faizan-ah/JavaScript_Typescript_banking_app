export default class Bank {
  name;
  branches = [];

  constructor(name) {
    this.name = name;
  }

  addBranch(branch) {
    const currentBranches = this.branches.length;
    const isBranchPresent = this.branches.some((b) => b.name === branch.name);
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
    return (
      this.branches.filter((branch) =>
        branch.name.toLowerCase().includes(branchName.toLowerCase())
      ) ?? null
    );
  }

  checkBranch(branch) {
    return this.branches.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
    let customers = branch.getCustomers();
    if (includeTransactions) {
      return JSON.stringify(customers, null, 2);
    }
    const customersWithoutTransactionDetail = JSON.parse(
      JSON.stringify(customers)
    );
    customersWithoutTransactionDetail.map((customer) => {
      customer.transactions = [];
    });
    return customersWithoutTransactionDetail;
  }
}
