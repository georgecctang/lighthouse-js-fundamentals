const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log('\nPrint ingredients using while loop\n');

let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log('\nPrint ingredients using for loop\n');

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log('\nPrint ingredients backwards using for loop\n');

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}