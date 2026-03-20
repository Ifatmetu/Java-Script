//Personal budget tracker Challange(Phase 5-Conditional control statement)
/*
Challange Requirement:
Use if,else,relational operators:

Use if-else conditions to categorize the user's financial status based on saving:

Excellent:If savings>=$1000
Good: If savings are between $500-$999
Needs Improvement:If savings are between $100-$499
Critical:If savings<$100
Use if-else conditions to determine if the user is overspending:
Show a warning if expenses are greater then income.
Enhance Console Output to display the user's financial health status.

Expected Console Output:
Personal Budget Tracker
User:IFAT JAHAN METU
Total Income:$5000
Total Expenses:$2300
Tax Deducted(10%):$500
Net Income After Tax:$4500
Remaining Balance:$2200
Savings(20% of balance):$440
Warning:You are spending more than your income!
*/


let UserName=prompt("Enter your name:");
let income=Number(prompt("\nEnter your Income amount:"));

let rent=Number(prompt("\nEnter amount of rent:"));
let groceries=Number(prompt("\nEnter amount of groceries:"));
let transport=Number(prompt("\nEnter amount of transport:"));
let entertainment=Number(prompt("\nEnter amount of entertainment:"));

let expenses=rent+groceries+transport+entertainment;
let tax=income*(10/100);
let NetIncomeAfterTax=income-tax;
let RemainingBalance=NetIncomeAfterTax-expenses;
let savings=RemainingBalance*(20/100);

console.log("Personal Budget Tracker:\n")
console.log("User:" + UserName);
console.log("Total Income: $" + income);
console.log("Total Expenses: $" + expenses);
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

if (expenses > income) {
    console.log("Warning: You are spending more than your income!");
}


