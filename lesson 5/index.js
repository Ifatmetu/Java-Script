
//Array methods
var names=["Ifat","Jahan","Metu","Israt"];
console.log(names);


//shift opposite of pop
names.shift();
console.log(names);


//unshift opposite of push
names.unshift("Tasin");
console.log(names);


//splice for element add or remove
//ArrayName.splice(position,add=0,"Values","values")
names.splice(2,0,"Mahir","hossain");//add
console.log(names);
names.splice(2,1);//remove
console.log(names);

//Slice creat a new array by slicing
var newArray=names.slice(2);
console.log(newArray);


//sort method sort an array according to alphabatic order
var sortedArray=names.sort()
console.log(sortedArray);
names.reverse();//reverse array
console.log(sortedArray);


var number=[20,5,25,45,1];
number.sort(function(a,b){
    return a-b;//for ascending order
})
console.log(number);

number.sort(function(a,b){
    return b-a;//for decending order
})
console.log(number);




/*
Creat a function called highestScore that will
->Receive a 1D array called scores
->return the highest score
*/

function highestScore(arr){
    arr.sort(function(a,b){
        return b-a;
    })
    console.log(arr[0]);
}

var n=parseInt(prompt("Enter size of array"));
var score=new Array(n);
for(var i=0;i<n;i++){
    score[i]=parseInt(prompt());
}
highestScore(score);



/*
Creat a function called highestRunScore that will
->Receive a 2D array called playersInfo
->Based on highest score,return the name of the player
*/


function highestRunScore(playersinfo){
    var highestScorer=playersinfo[0][0];
    var highestScor=playersinfo[0][1];
    for(var x=1; x<playersinfo.length;x++){
        if(highestScor<playersinfo[x][1]){
            highestScor=playersinfo[x][1];
            highestScorer=playersinfo[x][0];
        }
    }
return highestScorer;

}


var n=parseInt(prompt("Enter number of players"));
var playersInfo=[];
for(var i = 0; i < n; i++){
    playersInfo[i] = [];

    playersInfo[i][0] = prompt("Enter player name:");
    playersInfo[i][1] = parseInt(prompt("Enter score:"));
}
var namePlayer=highestRunScore(playersInfo);
console.log(namePlayer);