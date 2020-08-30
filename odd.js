//Create a function to determine if a number is odd or not.

const isOdd = (num) => {
  return (num % 2 === 1) ? true : false;
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));