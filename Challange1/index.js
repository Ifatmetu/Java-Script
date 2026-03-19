//Personal budget tracker Challange(Phase 1-Print with console)
/*Challange Overview:Creat a basic personal budget tracker that allows users to displays their name,income amount and expenses amount using the console.Later,we will extend this project by adding variable,operators,functions,arrays,objects,and DOM manipulation.


Challange Requirement:Use console.log() to:
Display the user's name.
Display the income,expenses.
Format the output neatly
*/
console.log("Personal budget tracker:\n")
console.log("User name:Ifat\n")
console.log("Income Amount:100000\n")
console.log("Expenses Amount:50000\n")

//Personal budget tracker Challange(Phase 2-Variables,Data Types)
/*Challange Overview:Creat a basic personal budget tracker that allows users to enter their income amount and expenses amount ,and then displays using the console.Later,we will extend this project by adding operators,functions,arrays,objects,and DOM manipulation.


Challange Requirement:
Declare variables for:
User's name(String)
Income amount(number)
Expenses amount(number)
Use console.log() to:
Display the user's name.
Display the income,expenses.
Format the output neatly.
*/
console.log("Personal budget tracker:\n")
let UserName=prompt("Enter your name:");
let income=Number(prompt("\nEnter your Income amount:"));
let expenses=Number(prompt("\nEnter your expenses amount:"));

console.log("\nUser name:"+UserName);
console.log("Income Amount"+income);
console.log("Expenses Amount:"+expenses);


//Personal budget tracker Challange(Phase 3-String concatenation and methods)
/*
Challange Requirement:
Format the output following way:
Personal Budget Tracker
User:IFAT JAHAN METU
Total Income:$3750.25
Total Expenses:$2500.75
*/

console.log("Personal Budget Tracker:\n")
console.log("User:" + UserName.toUpperCase());
console.log("Total Income: $" + income);
console.log("Total Expenses: $" + expenses);

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