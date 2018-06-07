'use strict';

// Spreading an object allows for the addition of new properties and values to an object without mutations (i.e. a new object is created) and it can also be used to combine multiple objects together. It should be noted that spreading objects does not do nested copying.
//Example: Add a new object property and value without mutating the original object.

const spreadableObject = {
  name: 'Hector',
  phone: 'iPhone'
};
const newObject ={
  ...spreadableObject,
  carModel: 'VW'
}
console.log(newObject);

//Result should be: {name: "Hector", phone: "iPhone", carModel: "VW"}