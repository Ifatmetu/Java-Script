

var lan=document.querySelectorAll(".myButton").length;

for(var i=0;i<lan;i++){
    
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text+" is clicked";

})
}



