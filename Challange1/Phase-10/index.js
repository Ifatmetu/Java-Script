//Personal budget tracker Challange(Phase 10-JSON,localStorage)
/*
Challange Requirement:
1.Use LocalStorage to store and retrive the userBudget object
2. Modify functions to :
  -Save budget data after every update.
  -Load budget data when the script runs.
3.Ensure modular function for storing,retrieving,amd clearing data.

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

// function to save budget data to localstorage
function saveBudgetToLocal(userBudget) {
  localStorage.setItem('userBudget', JSON.stringify(userBudget));
}

// function to retrieve budget data from localstorage
function getBudgetFromLocal() {
  const savedBudget = localStorage.getItem('userBudget');
  return savedBudget ? JSON.parse(savedBudget) : null;
}

// function to clear budget data from localstorage
function clearBudgetFromLocal() {
  localStorage.removeItem('userBudget');
  console.log('🗑 Budget data cleared from local storage.');
}

// Function to get user input
function getUserInput(promptMessage, isNumber = false) {
  const userInput = prompt(promptMessage);
  return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
  const expenses = [];
  // collect expenses dynamically
  for (let i = 1; i <= numberOfExpenses; i++) {
    let expense = getUserInput(`Enter expense ${i}: `, true);
    if (isNaN(expense) || expense < 0) {
      console.log(`⚠️ Invalid input for expense ${i}, setting it it $0`);
      expense = 0;
    }
    expenses.push(expense);
  }
  return expenses;
}

function calculateTotalExpenses(expenses) {
  // Calculate total expenses using the array
  let totalExpenses = 0;
  for (let index = 0; index < expenses.length; index++) {
    totalExpenses += expenses[index];
  }
  return totalExpenses;
}

function calculateTax(income, taxRate) {
  return income * taxRate;
}
function calculateNetIncome(income, tax) {
  return income - tax;
}
function calculateBalance(netIcome, totalExpenses) {
  return netIcome - totalExpenses;
}
function calculateSavings(balance, savingPercentage) {
  return balance * savingPercentage;
}
function getFinancialStatus(savings) {
  let finalStatus = '';
  if (savings >= 1000) {
    finalStatus = '💰 Excellent! You are saving well!';
  } else if (savings >= 500) {
    finalStatus = '✅ Good! You have a decent savings amount.';
  } else if (savings >= 100) {
    finalStatus = '⚠️ Needs Improvement. Consider reducing expenses.';
  } else {
    finalStatus = '🚨 Critical! Your savings are too low!';
  }
  return finalStatus;
}

function displayResults(userBudget) {
  console.log('📊 Personal Budget Tracker App');
  console.log(`User: ${userBudget.userName}`);
  console.log(`💰 Total Income: $${userBudget.income}`);
  console.log(`💸 Total Expenses: $${userBudget.totalExpenses}`);
  console.log(`📉 Tax Deducted (10%): $${userBudget.tax}`);
  console.log(`💲 Net Income After Tax: $${userBudget.netIncome}`);
  console.log(`🟢 Remaining Balance: $${userBudget.balance}`);
  console.log(`💾 Savings (20% of balance): $${userBudget.savings}`);
  console.log(userBudget.finalStatus);

  const overspendingMessage = checkOverSpending(userBudget);
  if (overspendingMessage) {
    console.log(overspendingMessage);
  }

  console.log('📝 Expense Breakdown:');
  for (let index = 0; index < userBudget.expenses.length; index++) {
    console.log(`Expense ${index + 1} : $${userBudget.expenses[index]}`);
  }
}

function checkOverSpending(userBudget) {
  // Check if expenses exceed income
  return userBudget.totalExpenses > userBudget.income
    ? '⚠️ Warning: You are spending more than your income!'
    : '';
}

// function to calculate financial details
function calculateBudget(userBudget) {
  userBudget.expenses = getExpenses(userBudget.numberOfExpenses);

  userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
  // Tax deduction (10% of income)
  userBudget.tax = calculateTax(userBudget.income, 0.1);

  // Net income after the tax
  userBudget.netIncome = calculateNetIncome(userBudget.income, userBudget.tax);

  // Calculate remaining balance
  userBudget.balance = calculateBalance(
    userBudget.netIncome,
    userBudget.totalExpenses
  );

  // Savings (20% of remaining balance)
  userBudget.savings = calculateSavings(userBudget.balance, 0.2);

  // Determine the financial health status
  userBudget.finalStatus = getFinancialStatus(userBudget.savings);
  saveBudgetToLocal(userBudget);
}

// Main function to the run the budget tracker
function runBudgetTracker() {
  let userBudget = getBudgetFromLocal();

  if (userBudget) {
    console.log('✅ Previous Budget Data Loaded from Local Storage!');
    displayResults(userBudget);
  } else {
    userBudget = {
      userName: '',
      income: 0,
      expenses: [],
      numberOfExpenses: 0,
      totalExpenses: 0,
      tax: 0,
      netIncome: 0,
      balance: 0,
      savings: 0,
      finalStatus: 0,
    };

    userBudget.userName = getUserInput('Enter your name: ');
    userBudget.income = getUserInput('Enter your total income: ', true);
    userBudget.numberOfExpenses = getUserInput(
      'How many expenses do you have? ',
      true
    );

    // validate inputes to ensure they are numbers
    if (
      isNaN(userBudget.income) ||
      isNaN(userBudget.numberOfExpenses) ||
      userBudget.income <= 0 ||
      userBudget.numberOfExpenses < 0
    ) {
      console.log('⚠️ Invalid input. Please enter valid numbers.');
      return;
    } else {
      calculateBudget(userBudget);
      displayResults(userBudget);
    }
  }
}

runBudgetTracker();