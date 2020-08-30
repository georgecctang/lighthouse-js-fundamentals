// function with one parameter
const sayHello  = function (name) {
  console.log("Hello, " + name);
}

//test function
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//function to print message to console
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}

//test function
sayHelloToConsole('John'); 

//function to return a string 
const returnSayHello  = function (name) {
  return "Hello, " + name;
}

// assign return value to variable and print variable
const greeting = returnSayHello('John');
console.log(greeting);