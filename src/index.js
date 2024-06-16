import Bank from "./bank.js";
import Branch from "./branch.js";
import Customer from "./customer.js";

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

console.log(
  "Find branches of name 'bank': ",
  arizonaBank.findBranchByName("bank")
);
console.log(
  "Find branches of name 'Sun': ",
  arizonaBank.findBranchByName("Sun")
);

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
console.log("Balance of customer1: ", customer1.getBalance());
console.log(
  "List customers of arizonaBank, westBranch: ",
  arizonaBank.listCustomers(westBranch, true)
);
console.log(
  "List customers of arizonaBank, westBranch (without transactions): ",
  arizonaBank.listCustomers(westBranch, false)
);
console.log(
  "List customers of arizonaBank, sunBranch: ",
  arizonaBank.listCustomers(sunBranch, true)
);
