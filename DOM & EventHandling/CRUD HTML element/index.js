//Creating HTML Element

var heading3=document.createElement("h1");
var text=document.createTextNode("This is Heading 3");
heading3.appendChild(text);

var myDiv=document.getElementById("my-div");
myDiv.appendChild(heading3);


//element remove

var heading2=document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);


//Creating HTML Element before something

var heading0=document.createElement("h1");
var text0=document.createTextNode("This is Heading 0");
heading0.appendChild(text0);
var heading1=document.createElement("h1")[0];
myDiv.insertBefore(heading0,heading1);


