//localStorage vs sessionStorage
//10mb vs 5mb
//permanent vs session(tab)


//Set data in session Storage
sessionStorage.setItem("User1","Metu");
sessionStorage.setItem("User2","Tasin");

//get data in session Storage
const Name=sessionStorage.getItem("User");
console.log(Name);
sessionStorage.removeItem("User")
sessionStorage.clear()

//set object
const user={id:"74",name:"Jahan"};
sessionStorage.setItem("user",JSON.stringify(user));

const userInfo=JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);


