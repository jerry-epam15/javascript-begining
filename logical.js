//OR(||)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

//exceptional case of OR

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//AND

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


//EXCEPTIONAL CASES OF AND

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0



//NOT 


alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false

//NULLISH COLLASING OPERATOR 

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)


let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)


