'use strict';

//this method checks if any item in an array passes a determinate condition. A good use case would be checking for user privileges. It also can be used similarly to a .forEach()   where you would perform an action on each array item and break out of the loop once a truthy value is returned.
//example: Check if there is at least one 'admin' in an array.

const userPrivileges = ['user', 'user', 'admin', 'user'];
const containsAdmin = userPrivileges.some(e=>e ==='admin');
console.log(containsAdmin);

//result should be true