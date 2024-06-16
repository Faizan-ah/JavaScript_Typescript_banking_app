import Branch from "./branch.js";
import {
  ERR_INVALID_BOOLEAN,
  ERR_INVALID_INSTANCE,
  ERR_INVALID_NAME,
  ERR_INVALID_NUMBER,
  ERR_RECORD_ALREADY_PRESENT,
} from "./Utility/constants.js";

export default class Bank {
  name;
  branches = [];

  constructor(name) {
    if (typeof name !== "string") {
      throw new Error(ERR_INVALID_NAME);
    }
    this.name = name;
  }

  addBranch(branch) {
    if (!(branch instanceof Branch)) {
      throw new Error(ERR_INVALID_INSTANCE("Branch"));
    }
    const currentBranches = this.branches.length;
    //checks if branch with same id and name is present
    const isBranchPresent = this.checkBranch(branch);
    //checks if branch with same  name is present
    const isBranchNamePresent = this.branches.some(
      (b) => b.name === branch.name
    );

    if (!isBranchPresent && !isBranchNamePresent) {
      this.branches.push(branch);
      if (this.branches.length > currentBranches) {
        return true;
      }
      return false;
    }
    console.log(ERR_RECORD_ALREADY_PRESENT);
    return false;
  }

  addCustomer(branch, customer) {
    if (!(branch instanceof Branch)) {
      throw new Error(ERR_INVALID_INSTANCE("Branch"));
    }
    branch.addCustomer(customer);
    return true;
  }

  addCustomerTransaction(branch, customerId, amount) {
    if (!(branch instanceof Branch)) {
      throw new Error(ERR_INVALID_INSTANCE("Branch"));
    }
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    if (typeof customerId !== "number" || isNaN(customerId)) {
      throw new Error(ERR_INVALID_NUMBER("CustomerID"));
    }

    branch.addCustomerTransaction(customerId, amount);
    return true;
  }

  findBranchByName(branchName) {
    if (typeof branchName !== "string") {
      throw new Error(ERR_INVALID_NAME);
    }
    return (
      this.branches.filter((branch) =>
        branch.name.toLowerCase().includes(String(branchName).toLowerCase())
      ) ?? null
    );
  }

  checkBranch(branch) {
    return this.branches.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
    if (!(branch instanceof Branch)) {
      throw new Error(ERR_INVALID_INSTANCE("branch"));
    }
    if (typeof includeTransactions !== "boolean") {
      throw new Error(ERR_INVALID_BOOLEAN);
    }

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
