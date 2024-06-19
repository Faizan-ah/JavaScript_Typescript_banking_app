import Bank from "./bank.js";
import Branch from "./branch.js";
import Customer from "./customer.js";

const arizonaBank = new Bank("Arizona");
const horizonBank = new Bank("Horizon");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const sunBranch2 = new Branch("Sun Branch 2");
const westBranch2 = new Branch("West Branch");

const customer1 = new Customer("John Ali", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);
const customer4 = new Customer("Ali", 1);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(sunBranch2);
horizonBank.addBranch(westBranch2);
//Branches with the same name should not be added
arizonaBank.addBranch(westBranch2);

console.log(arizonaBank.checkBranch(westBranch2));

console.log(`Branches of ${arizonaBank.name}`, arizonaBank.branches);

console.log(
  `Find branches of name 'bank' in ${arizonaBank.name}: `,
  arizonaBank.findBranchByName("bank")
);
console.log(
  `Find branches of name 'Sun' in ${arizonaBank.name}: `,
  arizonaBank.findBranchByName("Sun")
);

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(westBranch, customer3);
//customer4 shouldn't be added to westBranch because the ID is redundant
arizonaBank.addCustomer(westBranch, customer4);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

horizonBank.addCustomer(westBranch2, customer4);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
customer2.addTransactions(-4000); //3000 - 4000 =  -1000
console.log(`Balance of ${customer1.name}: `, customer1.getBalance());
//Balance of customer2 should not be negative
console.log(`Balance of ${customer2.name}: `, customer2.getBalance());

console.log(
  `List customers of ${arizonaBank.name}, ${westBranch.name}: `,
  arizonaBank.listCustomers(westBranch, true)
);
console.log(
  `List customers of ${arizonaBank.name}, ${sunBranch.name}: `,
  arizonaBank.listCustomers(sunBranch, true)
);
console.log(
  `List customers of ${arizonaBank.name}, ${westBranch.name} of name 'John': `,
  arizonaBank.listCustomers(westBranch, false, "John")
);
console.log(
  `List customers of ${arizonaBank.name}, ${westBranch.name} of ID '1': `,
  arizonaBank.listCustomers(westBranch, false, "", 1)
);
console.log(
  `List customers of ${arizonaBank.name}, ${westBranch.name} of name 'John' and ID '3': `,
  arizonaBank.listCustomers(westBranch, false, "John", 3)
);
console.log(
  `List customers of ${arizonaBank.name}, ${westBranch.name} (without transactions): `,
  arizonaBank.listCustomers(westBranch, false)
);
console.log(
  `List customers of ${horizonBank.name}, ${westBranch2.name} (without transactions): `,
  horizonBank.listCustomers(westBranch2, false)
);
