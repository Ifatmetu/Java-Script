//Object Structure
var Stud={
    name:"Ifat",
    age:22,
    CGPA:3.95,
    lang:["Bangla","English","Hindi"]
}


//Creating constractor
function Student(name,age,CGPA,lang){
    this.name=name;
    this.age=age;
    this.CGPA=CGPA;
    this.lang=lang;

    //function
    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.CGPA);
        console.log(this.lang);
    }
}

var stu1 = new Student("Ifat Jahan Metu",22,3.95,["Bangla","English","Hindi"]);
stu1.display()



Math.sqrt(25);
//Ans:5
Math.abs(-25);
//Ans:25
Math.sin(2);
//Ans:0.90929742
Math.pow(2,4)
//Ans:16
Math.floor(2.4);
//Ans:2
Math.ceil(2.1);
//Ans:3
Math.round(3.3);
//Ans:3
Math.round(3.5);
//Ans:4
Math.max(3,9,2,8)
//Ans:9
Math.random();
//genarate a random value between 0-0.99
Math.random()*6;
//genarate a random value between 0-5



//Gussing Game
/*
->Gussing a number from 1 to 5
->Generate a random number between 1 to 5
->If the guess number matches random number;then show message won else lose
->run the game 5 times
->show the number of wons and losts
*/

var win=0;
var loss=0;
for(var i=0;i<5;i++){
    var random=Math.floor(Math.random()*5)+1;
    var guess=parseInt(prompt("Guess Number:"));
    if(random===guess){
        win++;
        console.log("You are correct.");
    }else{
        loss++;
        console.log("Incorrect.Try Again.");
    }
}
console.log("You won "+win+" times.\nYou lost "+loss+" times." )





