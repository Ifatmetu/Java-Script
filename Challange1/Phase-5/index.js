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

let savings = (income - tax - expenses) * (20 / 100);
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


