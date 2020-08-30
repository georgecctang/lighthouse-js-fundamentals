// function to check if number is even (return boolean)
const isEven  = function (num) {
  return num % 2 === 0;
}

// assign return value to variables and print
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);



// evalutate function directly in console.log function
console.log(isEven(10));
console.log(isEven(11));