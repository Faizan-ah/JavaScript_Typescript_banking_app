import {
  ERR_INVALID_INSTANCE,
  ERR_INVALID_NAME,
  ERR_INVALID_NUMBER,
  ERR_NO_RECORD,
  ERR_RECORD_ALREADY_PRESENT,
} from "./Utility/constants";
import Customer from "./customer";

export default class Branch {
  name: string;
  customers: Array<Customer>;

  constructor(name: string) {
    if (!name || typeof name !== "string") {
      throw new Error(ERR_INVALID_NAME);
    }
    this.name = name;
    this.customers = [];
  }

  getName(): string {
    return this.name;
  }

  getCustomers(): Array<Customer> {
    return this.customers;
  }

  addCustomer(customer: Customer): boolean {
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

  addCustomerTransaction(customerId: number, amount: number): boolean {
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
