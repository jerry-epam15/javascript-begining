// In JavaScript, any value could effectively be treated as 
// either true or false whenever evaluated in a boolean context, 
// such as within conditional statements (e.g., if, while). 
// Values that evaluate to true are said to be "truthy," and 
// those that evaluate to false are called "falsy."

//Falsy Values:
// There are only a few specific values in JavaScript 
// that are naturally considered falsy. These are:



// false: The boolean false itself.
// 0: The number zero.
// -0: Negative zero (can occur in certain arithmetic operations).
// "": An empty string.
// null: Represents the intentional absence of any object value.
// undefined: Indicates that a variable has not been assigned a value.
// NaN: Represents a "Not-a-Number" result of an erroneous or undefined mathematical operation.

if (false) {} else { console.log('false is falsy'); }
if (0) {} else { console.log('0 is falsy'); }
if (-0) {} else { console.log('-0 is falsy'); }
if ("") {} else { console.log('"" is falsy'); }
if (null) {} else { console.log('null is falsy'); }
if (undefined) {} else { console.log('undefined is falsy'); }
if (NaN) {} else { console.log('NaN is falsy'); }


//TRUTHY VALUE 


// Truthy Values:
// Essentially any value that's not in the list of falsy values can be considered truthy. This includes:

// "0": The string "0" (interestingly, while 0 is falsy, "0" is truthy).
// "false": The string "false" (similar to "0", the string is truthy although it represents false).
// []: An empty array.
// {}: An empty object.
// All numbers other than 0, -0, and NaN (including negative numbers).
// All strings except the empty string "".

if ("0") { console.log('"0" is truthy'); }
if ("false") { console.log('"false" is truthy'); }
if ([]) { console.log('[] is truthy'); }
if ({}) { console.log('{} is truthy'); }
if (42) { console.log('42 is truthy'); }
if ("hello") { console.log('"hello" is truthy'); }

