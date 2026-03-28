//For set data in Local Storage
// ->localStorage store data as a key value pair string

console.log(localStorage);
localStorage.setItem("userName","Ifat");
localStorage.setItem("passWord","jahan");

//For get data in Local Storage
const userName=localStorage.getItem("userName");
const userPassword=localStorage.getItem("passWord");
console.log(userName,userPassword);

//For update data in Local Storage
localStorage.setItem("userName","metu");
localStorage.setItem("passWord","hossain123");

//For remove data in Local Storage
localStorage.removeItem("userName");

//value as string
const countries=["Bangladsh","Nepal","Iran"];
localStorage.setItem("countries",JSON.stringify(countries));

const countryList=JSON.parse(localStorage.getItem("countries"));
console.log(countryList);

// for clear everything
localStorage.clear();



