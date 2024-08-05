//use strict 

//When it is located at the top of a script, the whole script works the “modern” way.
//Doing that enables strict mode in that function only. But usually people use it for the whole script.


// "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

//In JavaScript, "strict mode" is a way to opt into a restricted variant of JavaScript,
//thereby implicitly opting-out of "sloppy mode" or the normal mode. 
//Strict mode makes several changes to normal JavaScript semantics:

// 1.Eliminates some JavaScript silent errors by changing them to throw errors:
// 2.Prevents or throws errors for unsafe actions:
// 3.Fixes mistakes that make JavaScript engines difficult to optimize
// 4.Prohibits some syntax likely to be defined in future versions of ECMAScript:

// Non-strict mode
myVar = 'Hello, world!';
console.log(myVar);  // Generally works but pollutes the global namespace (bad practice)

// Strict mode
"use strict";
myNewVar = 'Hello, world!';
console.log(myNewVar);  // Throws ReferenceError: myNewVar is not defined

// The primary difference between strict mode (explicit) and non-strict mode (implicit) 
// is that strict mode helps catch common coding faults and unsafe actions at an early stage, 
// which might otherwise lead developers into difficult debugging sessions and potential 
// production issues.

