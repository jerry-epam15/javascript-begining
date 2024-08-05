// Modules, introduction

// A module may contain a class or a library of functions for a specific purpose.

//What is a module?

// A module is just a file. One script is one module. As simple as that.

// Modules can load each other and use special directives export and import to 
//interchange functionality, call functions of one module from another one:

// export keyword labels variables and functions that should be accessible 
//from outside the current module.
// import allows the import of functionality from other modules.

//For instance, if we have a file sayHi.js exporting a function:

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
//…Then another file may import and use it:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!

// Always “use strict”

// Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error.