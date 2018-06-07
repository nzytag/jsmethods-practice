'use strict';

//This method is similar to .some(), but checks if all items in an array pass a condition.

//for Example, Check if all ratings are equal to or greater than 3 stars.

const ratings =[3,4,5,3,5];
const goodOverallRating = ratings.every(rating=>rating>=3);
console.log(goodOverallRating);

//result should be true