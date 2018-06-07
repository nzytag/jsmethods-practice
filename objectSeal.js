'use strict';

//This method stops any new properties from being added to an object, but still allows for existing properties to be changed.
//Example: Seal an object to prevent the wearsWatch property from being added:

const sealedObject = {
  name: 'Hector'
}
Object.seal(sealedObject);
sealedObject.name = "Norza";
sealedObject.wearsWatch= true;

//Result should be: true