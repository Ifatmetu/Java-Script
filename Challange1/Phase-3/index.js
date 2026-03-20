//Personal budget tracker Challange(Phase 3-String concatenation and methods)
/*
Challange Requirement:
Format the output following way:
Personal Budget Tracker
User:IFAT JAHAN METU
Total Income:$3750.25
Total Expenses:$2500.75
*/

let UserName=prompt("Enter your name:");
let income=Number(prompt("\nEnter your Income amount:"));
let expenses=Number(prompt("\nEnter your expenses amount:"));

console.log("Personal Budget Tracker:\n")
console.log("User:" + UserName.toUpperCase());
console.log("Total Income: $" + income);
console.log("Total Expenses: $" + expenses);