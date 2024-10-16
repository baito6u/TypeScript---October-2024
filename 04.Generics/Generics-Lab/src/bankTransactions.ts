// Абстрактен клас CreateAccount
abstract class CreateAccount<T, U> {
    constructor(public bankName: T, public bankID: U) {}
  
    // Абстрактен метод showDetails, който трябва да бъде имплементиран от наследяващите класове
    abstract showDetails(): string;
  }
  
  // Клас PersonalAccount, който наследява CreateAccount
  class PersonalAccount extends CreateAccount<string, number> {
    public readonly ownerName: string;
    public money: number = 0;
    public recentTransactions: { [key: string]: number } = {};
  
    constructor(bankName: string, bankID: number, ownerName: string) {
      super(bankName, bankID); // Викаме конструктора на абстрактния клас
      this.ownerName = ownerName;
    }
  
    // Метод за депозиране на пари
    deposit(amount: number): void {
      this.money += amount;
    }
  
    // Метод за разходи
    expense(amount: number, expenseType: string): void {
      // Проверяваме дали имаме достатъчно пари за разхода
      if (this.money < amount) {
        throw new Error(`You cant make ${expenseType} transaction`);
      }
  
      // Ако вече имаме запис за този разход, го добавяме към съществуващия
      if (this.recentTransactions[expenseType]) {
        this.recentTransactions[expenseType] += amount;
      } else {
        this.recentTransactions[expenseType] = amount;
      }
  
      // Намаляваме баланса с направената сума
      this.money -= amount;
    }
  
    // Метод за показване на детайлите за акаунта
    showDetails(): string {
      // Изчисляваме общо похарчените пари
      const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((acc, curr) => acc + curr, 0);
  
      // Връщаме форматирания резултат
      return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
  }
  
  // Пример за употреба
  let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
  account.deposit(1000);
  account.deposit(1000);
  account.expense(700, 'Buy new phone');
  account.expense(400, 'Book a vacation');
  account.expense(400, 'Book a vacation');
  account.expense(100, 'Buy food');
  console.log(account.showDetails());

  console.log("===================");
  
  
  let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
  account2.deposit(10000);
  account2.deposit(7000);
  account2.expense(1200, 'Buy a new car');
  account2.expense(200, 'Go to a fancy restaurant');
  account2.expense(100, 'Go to a bar');
  account2.expense(30, 'Go to the movies');
  console.log(account2.showDetails());
  