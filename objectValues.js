'use strict';

//This method returns an array of the values of an object

// example:

const iceCreamColors= {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red'
}

const colors = Object.values(iceCreamColors);
console.log(colors);

//result should be: ["brown", "white", "red"]