'use strict';
//This method prevents you from modifying existing object properties or adding new properties and values to an object. It’s often what people think const does, however const allows you to modify an object.
//Example: Freeze an object to prevent the name property from being changed.


const frozenObject = {
  name: 'Hector'
}

Object.freeze(frozenObject);

frozenObject.name = 'Norza';
console.log(frozenObject);

//Result should be: {name: "Hector"}