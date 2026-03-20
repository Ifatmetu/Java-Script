//Personal budget tracker Challange(Phase 6-loop control statement)
/*
Challange Requirement:
-Ask the user for their name and store it in a variable.
-Ask the user for their total income using prompt()
-Ask the user how many expenses they have,then use a loop to collect expense amounts dynamically.
-make sure to validate all the inputs.
-perfom all calculations(tax,balance,savings,financial status)
-Show the result in the console.

Expected Console Output:
Personal Budget Tracker
User:IFAT JAHAN METU
Total Income:$5000
Total Expenses:$2200
Tax Deducted(10%):$500
Net Income After Tax:$4500
Remaining Balance:$2300
Savings(20% of balance):$440
Warning:You are spending more than your income!
*/



let UserName=prompt("Enter your name:");
let income=Number(prompt("\nEnter your Income amount:"));

let NumberOfExpenses=Number(prompt("Enter number of Expenses:"))
let Expenses=0;
for(var i=1;i<=NumberOfExpenses;i++){
    Expenses=Expenses+Number(prompt("Enter expense " + i + ":"));
}
let tax=income*(10/100);
let NetIncomeAfterTax=income-tax;
let RemainingBalance=NetIncomeAfterTax-Expenses;
let savings=RemainingBalance*(20/100);

console.log("Personal Budget Tracker:\n")
console.log("User:" + UserName);
console.log("Total Income: $" + income);
console.log("Total Expenses: $" + Expenses);
console.log("Tax Deducted(10%): $" + tax);
console.log("Net Income After Tax: $" + NetIncomeAfterTax);
console.log("Remaining Balance: $" + RemainingBalance);
console.log("Savings(20% of balance): $" +savings);

let condition;

if (savings >= 1000) {
    condition = "Excellent";
} 
else if (savings >= 500 && savings <= 999) {
    condition = "Good";
} 
else if (savings >= 100 && savings <= 499) {
    condition = "Needs Improvement";
} 
else {
    condition = "Critical";
}

console.log("Financial Status: " + condition);

if (Expenses > income) {
    console.log("Warning: You are spending more than your income!");
}
