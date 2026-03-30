

var photos=["image/pic1.jpg","image/pic2.jpg","image/pic3.jpg"]
var imgTag=document.querySelector("img");

var count=0;

function next(){
    count++;
    if(count>=photos.length){
        count=0
    }
    imgTag.src=photos[count];
}


function prev(){
    count--;
    if(count<=-1){
        count=photos.length-1
    }
    imgTag.src=photos[count];
}