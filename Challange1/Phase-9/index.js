//Personal budget tracker Challange(Phase 9-Object)
/*
Challange Requirement:
1.Use an object (userBudget) to store:
->UserName
->income
->Expenses (array)
->tax
->netIncome
->balance
->savings
->financialStatus

2. Modify functions to work with the userBudget object.


Output:
Personal Budget Tracker
User:Ifat Jahan Metu
Total Income:$5000
Total Expenses:$2200
Tax Deducted(10%):$500
Net Income After Tax:$4500
Remaining Balance:$2300
Savings(20% of balance):$440
Warning:You are spending more than your income!
*/

console.log("Personal Budget Tracker\n");

// object
var userBudget = {
    userName: "",
    income: 0,
    expenses: [],
    tax: 0,
    netIncome: 0,
    balance: 0,
    savings: 0,
    financialStatus: ""
};

// input function
function getUserInfo() {
    userBudget.userName = prompt("Enter your name:");
    userBudget.income = Number(prompt("Enter your income:"));
}

// expenses input
function getExpenses() {
    var n = Number(prompt("How many expenses?"));

    for (var i = 1; i <= n; i++) {
        var expense = Number(prompt("Enter expense " + i + ":"));
        userBudget.expenses.push(expense);
    }
}

// total expenses
function getTotalExpenses() {
    var sum = 0;

    for (var i = 0; i < userBudget.expenses.length; i++) {
        sum = sum + userBudget.expenses[i];
    }

    return sum;
}

// tax
function calculateTax() {
    userBudget.tax = userBudget.income * 0.10;
}

// net income
function calculateNetIncome() {
    userBudget.netIncome = userBudget.income - userBudget.tax;
}

// balance
function calculateBalance() {
    userBudget.balance = userBudget.netIncome - getTotalExpenses();
}

// savings
function calculateSavings() {
    userBudget.savings = userBudget.balance * 0.20;
}

// status
function checkStatus() {
    if (userBudget.balance < 0) {
        userBudget.financialStatus = "Warning: You are spending more than your income!";
    } else {
        userBudget.financialStatus = "Good: Your budget is under control.";
    }
}

// display
function display() {
    console.log("\nPersonal Budget Tracker");
    console.log("User: " + userBudget.userName);
    console.log("Total Income: $" + userBudget.income);
    console.log("Total Expenses: $" + getTotalExpenses());
    console.log("Tax Deducted (10%): $" + userBudget.tax);
    console.log("Net Income After Tax: $" + userBudget.netIncome);
    console.log("Remaining Balance: $" + userBudget.balance);
    console.log("Savings (20% of balance): $" + userBudget.savings);
    console.log(userBudget.financialStatus);
}


// function call
getUserInfo();
getExpenses();
calculateTax();
calculateNetIncome();
calculateBalance();
calculateSavings();
checkStatus();
display();
