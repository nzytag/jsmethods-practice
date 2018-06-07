'use strict';

//This method creates an array that contains arrays of key/value pairs of an object
//Example:
const weather = {
  rain: 0,
  temperature: 24,
  humidity: 33
}
const entries = Object.entries(weather);

console.log(weather);

//Result should be: {rain: 0, temperature: 24, humidity: 33}
