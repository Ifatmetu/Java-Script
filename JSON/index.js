const data= require('./lesson1.json');
console.log(data);

console.log(data.friends[0].name);//json path finder
console.log(data.friends[1].age);//Access process

data.friends[0].name="Abul";//modify
console.log(data.friends[0].name);

delete data.friends[0].name;//delete
console.log(data);

//Access using loop
for(x in data){
    console.log(x);//key
    console.log(data[x]);//key with value
}


client to server data store-> convert into JSON(JSON.stringify(js objece))
server to client-> convert into JS(JSON.parse(json data))

const data2={
    name:"Ifat",
    age:23
}
console.log(JSON.stringify(data2));//js to JSON

console.log(JSON.parse('{"name":"Jahan","Age":25}'));//JSON to js



// For creating Schema
// https://www.liquid-technologies.com/online-json-to-schema-converter
//For Cheaking validity
//https://www.jsonschemavalidator.net/
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  },
  "required": ["name", "age"]
}



