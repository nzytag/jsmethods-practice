'use strict';

//Not too sure why someone would use this over the .map() method. This is a static method that creates an array based on another array or string. You can also pass a map callback function as an argument to further shape the data in the new array
//Example: Create an array from a string.

const newArray = Array.from('norzagaray');
console.log(newArray);

// result should be ["n", "o", "r", "z", "a", "g", "a", "r", "a", "y"]

//another example: Create an array that has double the value for each item in another array.

const doubledValues = Array.from([2,3,4], number => number *2);
console.log(doubledValues);

//result should be: [4,6,8]

