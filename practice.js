'use strict';

// this repo is just to practice methods used in JavaScript

//.filter() method: creates a new array based on the items od an array passes a certain condition
//for example: create an array of people's age that meet legal drinking age

const studentsAge = [17, 16, 18, 21, 22, 19];
const ableToDrink = studentsAge.filter(age => age >=21);
console.log(ableToDrink);
//result should be: [21, 22]






