// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
export class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        if (money > 0)
            this.balance += money;
        else {
            console.log("The deposit must be greater than 0");
        }
    }
    withDraw(money) {
        if (money < 0) {
            console.log("The withdraw must be greater than 0");
        }
        else if (this.balance < money) {
            console.log("Insufficient balance");
        }
        else {
            this.balance -= money;
        }
    }
}
const bAcc = new BankAccount(10);
console.log(`The balance: ${bAcc.balance}`);
bAcc.deposit(40);
console.log(`The balance after deposit 40: ${bAcc.balance}`);
bAcc.withDraw(20);
console.log(`The balance after withdraw 20: ${bAcc.balance}`);
//# sourceMappingURL=bankaccount.js.map