'use strict';

//This is often an overlooked method that uses and accumulator to reduce all items in an array to a single value. This is a great tool for calcularing totals. 
//The return value can be of any type btw.

//Example, add up the integers in an array:
const numbers = [1,2,3];
const total = numbers.reduce((accumulator, currentValue)=>
accumulator + currentValue);

console.log(total);

//the result should be: 6
