class BankAccount {
    private static interestRate: number = 0.02;  // Shared interest rate for all accounts
    private static idCounter: number = 1;        // Unique ID for each account
    private id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.idCounter++;
        this.balance = 0;
    }

    // Deposit funds into the account
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Calculate interest for a given number of years
    public getInterest(years: number): number {
        return this.balance * BankAccount.interestRate * years;
    }

    // Retrieve account ID
    public getId(): number {
        return this.id;
    }

    // Set the global interest rate (for all accounts)
    public static setInterestRate(rate: number): void {
        BankAccount.interestRate = rate / 100;
    }
}