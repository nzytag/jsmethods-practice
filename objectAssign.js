'use strict';

//Allows for objects to be combined together. This method is no longer needed because you can use the object spread syntax instead. Like the object spread operator, Object.assign() does not do deep cloning. Lodash is your best friend when it comes to deep cloning objects.
//Example:  Combine two objects into one.

const firstObject = {
  firstName: 'Hector'
}
const secondObject = {
  lastName: 'Norza'
}
const combinedObject = Object.assign(firstObject, secondObject);
console.log(combinedObject);

//Result should be: {firstName: "Hector", lastName: "Norza"}