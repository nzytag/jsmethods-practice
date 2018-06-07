'use strict';
//Functions can use the rest parameter syntax to accept any number of arguments as an array.
//Example: Display the array of passed arguments.

function displayArgumentsArray(...theArguments){
  console.log(theArguments);
}
displayArgumentsArray('hi', 'good', 'afternoon', 'bud');

//Result should be:  ["hi", "good", "afternoon", "bud"]