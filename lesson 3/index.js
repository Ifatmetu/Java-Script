var number=20;

console.log(typeof(number))//data type

number=toString(number)//convert in String
console.log(typeof(number))

number="20";
number=parseInt(number);//convert in integer
console.log(typeof(number))

number="20.5678";
number=parseFloat(number);//convert in Float
console.log(typeof(number))

number=20.5678;
console.log(number.toFixed())//convert fixed number 
console.log(number.toFixed(2))//digit after floating point

console.log(number.toPrecision(3))//total no of digit want to show(return a String)


console.log(Number("20.56"))//convert in number
console.log(Number(true))

var text="Ifat"
console.log("Number of Character:" + text.length);//Srting Length
console.log(text.charAt(2));//printing index 2
console.log(text.toUpperCase())//convert in upper case letter
console.log(text.toLowerCase())//convert in lower case letter
var text1="Ifat";
var text2="Metu";
console.log(text1.concat(text2));//concatanation
console.log(text1.slice(0,2));//sliceing start with index 0 to 2 letter
