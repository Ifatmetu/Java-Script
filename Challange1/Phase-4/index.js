//Personal budget tracker Challange(Phase 4-Arithmetic Operators)
/*
Challange Requirement:
Use Arithmetic Operators(+,-,*,/,%) to:
-Calculate total expenses by summing multiple expenses such as rent,groceries,transport,entertainment.
-Apply tax deduction(e.g.,10% if income).
-Calculate savings percentage(e.g.,20% of remaining balance).
-Update console output to display the new calculations.

Expected Console Output:
Personal Budget Tracker
User:IFAT JAHAN METU
Total Income:$5000
Total Expenses:$2300
Tax Deducted(10%):$500
Net Income After Tax:$4500
Remaining Balance:$2200
Savings(20% of balance):$440
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


