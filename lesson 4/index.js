function withOutPerameter(){
    var num=5;
    var result=num*num;
    console.log(result);
}
function withPerameter1(num){
    var result=num*num;
    console.log(result);
}
function withPerameter2(num1,num2){
    var result=num1*num2;
    console.log(result);
}
function returnResult(num1,num2){
    var result=num1*num2;
    return result;
}

withOutPerameter();
withPerameter1(10);
withPerameter2(5,2);
var ans=returnResult(5,3);
console.log(ans);