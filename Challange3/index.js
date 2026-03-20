//FizzBuzz Challange
/*
Starting number=1
Ending number=100

Condition:
number%3==0 Fizz
number%5==0 Bizz
number%3==0 && number%5==0 FizzBuzz

print output:
1
2
3 Fizz
4
5 Buzz
6 Fizz
.
.
15 FizzBuzz
16
.
.
*/

for(var num=1;num<=100;num++){
    if(num%3 == 0 && num%5 == 0){
        console.log(num+" FizzBuzz ")
    }
    else if(num%3 == 0){
        console.log(num+" Fizz ")
    }
    else if(num%5 == 0){
        console.log(num+" Buzz ")   
    }
    else{
        console.log(num)
    }
}