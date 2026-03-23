//Personal budget tracker Challange(Phase 8-Function)
/*
Challange Requirement:
Use multiple small function for:
->Expected ConsoleGetting user input(Text & Number)
->Handling expenses(getting expenses,calculating total expenses)
->Performing financial calculations(Tax,net income,balance,savings)
->Determining financial status
->Displaying results in a structured formet


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

// Get user input
function getUserInput(promptMessage, isNumber = false) {
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput;
}

// Handle expenses
function getTotalExpenses() {
    let totalExpenses = 0;
    let numberOfExpenses = getUserInput("Enter number of expenses:", true);

    for (let i = 1; i <= numberOfExpenses; i++) {
        totalExpenses += getUserInput("Enter expense " + i + ":", true);
    }

    return totalExpenses;
}

// Financial calculations
function calculateFinance(income, expenses) {
    let tax = income * 0.10;
    let netIncome = income - tax;
    let balance = netIncome - expenses;
    let savings = balance * 0.20;

    return { tax, netIncome, balance, savings };
}

// Determine financial status
function getFinancialStatus(savings) {
    if (savings >= 1000) return "Excellent";
    else if (savings >= 500) return "Good";
    else if (savings >= 100) return "Needs Improvement";
    else return "Critical";
}

// Display result
function displayResult(name, income, expenses, finance, status) {
    console.log("Personal Budget Tracker");
    console.log("User: " + name);
    console.log("Total Income: $" + income);
    console.log("Total Expenses: $" + expenses);
    console.log("Tax Deducted(10%): $" + finance.tax);
    console.log("Net Income After Tax: $" + finance.netIncome);
    console.log("Remaining Balance: $" + finance.balance);
    console.log("Savings(20% of balance): $" + finance.savings);
    console.log("Financial Status: " + status);

    if (expenses > income) {
        console.log("Warning: You are spending more than your income!");
    }
}

// Main function
function runBudgetTracker() {
    let name = getUserInput("Enter your Name:");
    let income = getUserInput("Enter your Income:", true);
    let expenses = getTotalExpenses();

    let finance = calculateFinance(income, expenses);
    let status = getFinancialStatus(finance.savings);

    displayResult(name, income, expenses, finance, status);
}

// Run program
runBudgetTracker();