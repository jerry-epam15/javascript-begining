// NUMBER CONVERSTION 
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

alert( "6" / "2" ); // 3, strings are converted to numbers


//FAILED NUMBER CONVERSTION 

//If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


//NUMBER CONVERSTION RULES 

// undefined->	NaN
// null ->	0
// true and false	->1 and 0
// string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) 
// from the start and end are removed. If the remaining string is empty, the result is 0.
// Otherwise, the number is “read” from the string. An error gives NaN.


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


//STRING CONVERSTION 

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//BOOLEAN CONVERSTION 

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string,
// null, undefined, and NaN, become false.
// Other values become true.


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)



