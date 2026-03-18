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
