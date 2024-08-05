//Export and Import


// Export before declarations
// We can label any declaration as exported by placing export before it, 
//be it a variable, function or a class.

// For instance, here all exports are valid:

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}


// Export apart from declarations



// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables



//Import *
Usually, we put a list of what to import in curly braces import {...}, like this:

// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!


// But if there’s a lot to import, we can import everything as an 
//object using import * as <obj>, for instance:

// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');



//Import “as”

// We can also use as to import under different names.

// For instance, let’s import sayHi into the local variable hi for brevity, and import sayBye as bye:

// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!



//Export “as”

// The similar syntax exists for export.

// Let’s export functions as hi and bye:

// 📁 say.js
...
export {sayHi as hi, sayBye as bye};
// Now hi and bye are official names for outsiders, to be used in imports:

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!


//Export default

// In practice, there are mainly two kinds of modules.

// Modules that contain a library, pack of functions, like say.js above.
// Modules that declare a single entity, e.g. a module user.js exports only class User.


// Put export default before the entity to export:

// // 📁 user.js
// export default class User { // just add "default"
//   constructor(name) {
//     this.name = name;
//   }
// }


// For instance, these are all perfectly valid default exports:

export default class { // no class name
  constructor() { ... }
}
export default function(user) { // no function name
  alert(`Hello, ${user}!`);
}
// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



//----------------------------------

//basic is done some more to cover 
