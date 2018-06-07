'use strict';

// Spreading arrays using the spread operator (…) allows you to expand the elements in an array. It’s useful when concatenating a bunch of arrays together. It’s also a good way to avoid using the splice() method when looking to remove certain elements from an array because it can be combined with the slice() method to prevent direct mutation of an array.
//Example: Combine two arrays.

const spreadableOne = [1, 2, 3, 4, 5];
const spreadableTwo = [5, 6, 7, 8, 9];
const combined = [...spreadableOne, ...spreadableTwo];

console.log(combined);

//Result should be: [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]



