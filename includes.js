'use strict';

//This method checks if an array contains a certain value. It’s similar to .some(),but instead of looking for a condition to pass, it looks if the array contains a specific value.
//Example: Check if the array includes an item with the string 'hector'.

const names = ['malika', 'taybor', 'paola', 'hector'];
const includesHector =names.includes('hector');
console.log(includesHector);

//result should be true