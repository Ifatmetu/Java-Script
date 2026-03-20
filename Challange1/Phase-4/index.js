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

let tax=income*(10/100);
console.log("Personal Budget Tracker:\n")
console.log("User:" + UserName);
console.log("Total Income: $" + income);
console.log("Total Expenses: $" + expenses);
console.log("Tax Deducted(10%): $" + tax);
console.log("Net Income After Tax: $" +(income-tax));
console.log("Remaining Balance: $" +(income-tax-expenses));
console.log("Savings(20% of balance): $" +((income-tax-expenses)*(20/100)));


