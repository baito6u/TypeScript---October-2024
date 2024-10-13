class BankAccount {
  private static interestRate: number = 0.02; // Default interest rate shared by all accounts
  private static idCounter: number = 1; // Unique ID for every account
  private id: number;
  private balance: number;

  constructor() {
    this.id = BankAccount.idCounter++;
    this.balance = 0;
    console.log(`Account ID${this.id} created`);
  }

  // Method for depositing funds into the account
  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} to ID${this.id}`);
  }

  // Static method to set the global interest rate
  public static setInterestRate(rate: number): void {
    BankAccount.interestRate = rate;
    //console.log(`Set interest rate to ${rate}%`);
  }

  // Method to calculate interest for a given number of years
  public getInterest(years: number): number {
    return this.balance * BankAccount.interestRate * years;
  }

  // Method to retrieve the account ID
  public getId(): number {
    return this.id;
  }
}

// Map to store accounts by their ID
const accounts: Map<number, BankAccount> = new Map();

// Function to execute commands
function executeCommands(commands: string[]): void {
  for (const command of commands) {
    const [action, ...args] = command.split(" ");

    switch (action) {
      case "Create":
        const newAccount = new BankAccount();
        accounts.set(newAccount.getId(), newAccount);
        break;

      case "Deposit": {
        const accountId = Number(args[0]);
        const amount = Number(args[1]);

        const account = accounts.get(accountId);
        if (account) {
          account.deposit(amount);
        } else {
          console.log(`Account does not exist`);
        }
        break;
      }

      case "SetInterest": {
        const rate = Number(args[0]);
        BankAccount.setInterestRate(rate);
        break;
      }

      case "GetInterest": {
        const accountId = Number(args[0]);
        const years = Number(args[1]);

        const account = accounts.get(accountId);
        if (account) {
          const interest = account.getInterest(years);
          console.log(interest.toFixed(2));
        } else {
          console.log(`Account does not exist`);
        }
        break;
      }

      case "End":
        return;
    }
  }
}

// Sample test
// const commands = [
//     "Create",
//     "Deposit 1 20",
//     "GetInterest 1 10",
//     "End"
// ];

// executeCommands(commands);

// console.log("==========================");

// Example with more accounts
// const moreCommands = [
//     "Create",
//     "Create",
//     "Deposit 1 20",
//     "Deposit 3 20",   // Non-existing account
//     "Deposit 2 10",
//     "SetInterest 1.5",
//     "GetInterest 1 1",
//     "GetInterest 2 1",
//     "GetInterest 3 1", // Non-existing account
//     "End"
// ];

executeCommands([
  "Create",
  "Create",
  "Deposit 1 20",
  "Deposit 3 20", // Non-existing account
  "Deposit 2 10",
  "SetInterest 1.5",
  "GetInterest 1 1",
  "GetInterest 2 1",
  "GetInterest 3 1", // Non-existing account
  "End",
]);
