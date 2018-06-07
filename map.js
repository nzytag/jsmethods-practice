'use strict';

//this method creates a new array by manipulating values in anther array. it is great for data manipulation and is often used inReact because it is an immutable method
//example: we will create an array that adds money sign to the begining of each number:
const numbers = [2,3,4,5];
const dollars = numbers.map(number => '$' + number);
console.log(dollars);

