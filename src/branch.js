export default class Branch {
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
