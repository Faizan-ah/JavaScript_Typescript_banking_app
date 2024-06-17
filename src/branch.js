import {
  ERR_NO_RECORD,
  ERR_RECORD_ALREADY_PRESENT,
} from "./Utility/constants.js";
import Customer from "./customer.js";

export default class Branch {
  name;
  customers;

  constructor(name) {
    if (!name || typeof name !== "string") {
      throw new Error(ERR_INVALID_NAME);
    }
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
    if (!(customer instanceof Customer)) {
      throw new Error(ERR_INVALID_INSTANCE("customer"));
    }
    const isCustomerPresent = this.customers.some(
      (user) => user.id === customer.id
    );
    if (!isCustomerPresent) {
      this.customers.push(customer);
      return true;
    }
    console.log(ERR_RECORD_ALREADY_PRESENT);
    return false;
  }

  addCustomerTransaction(customerId, amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error(ERR_INVALID_NUMBER("Amount"));
    }
    if (typeof customerId !== "number" || isNaN(customerId)) {
      throw new Error(ERR_INVALID_NUMBER("CustomerID"));
    }
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId
    );
    if (customerIndex !== -1) {
      const customer = this.customers[customerIndex];
      customer.addTransactions(amount);
      return true;
    }
    console.log(ERR_NO_RECORD);
    return false;
  }
}
