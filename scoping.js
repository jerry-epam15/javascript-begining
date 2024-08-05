//SCOPE IN JS 
//the area where the variable can be accessed
//threee type of scope 
//function/local ,gllobal,block scopes 


//Global SCOPE 

//These below 4 variables are global scope variables 
//because these are not present under any function 

var a = 30;
let x = 40
const z =60;

console.log(a,x,z)

function show()
{
    console.log(a,x,z)
}

show();

// function scope/local scope- the variable which 
//are decalred inside the function

function greet(){
    let msg = "hi good morning";
    console.log(msg)
}

console.log(msg)

greet();




///block scope

{
    let age=20;//cant accessed outside the block 
    const sal=3000;
    console.log(age,sal)
    var name="sameer"
    console.log(name)
}

let age = 30

if(age>20){
    let isValidAge = true
}

console.log(name)//var is accessible

console.log(age,sal)

//CASE 1 



var a= 60;

function show(){
   // var a = undeifned
    console.log(a);//undefined //scope within the function //local available is considered 
    var a =100;
    let x =60
    console.log(a);//100
    {
        let x =40;
    }
    console.log(x);//60/error alredy defined
}

show();

console.log(a);//60

//--------



//CASE 2


var a= 60;

function show(){
   // var a = undeifned
    console.log(a);//60//since locally not decalred then look for the global scope 
    // var a =100;
    let x =60
    console.log(a);//60
    {
        let x =40;
    }
    console.log(x);//60/error alredy defined
}

show();

console.log(a);//60

//-------


//CASE 1

var x = 100;
var x =200;
function show(){
    let x =400;
    console.log(x);//400
}
console.log(x);//200

//CASE 2

let x = 100;
let x =200;//cant able to redeclare it 
function show(){
    let x =400;
    console.log(x);//400
}
console.log(x);//200


//CASE 3

const x = 100;
const x =200;//cant able to redeclare it 
function show(){
    let x =400;
    console.log(x);//400
}
console.log(x);//200


//---------------------------------


// Code blocks
// If a variable is declared inside a code block {...}, it’s only visible inside that block.

// For example:

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined


// We can use this to isolate a piece of code that does its own task, 
// with variables that only belong to it:

{
  // show message
  let message = "Hello";
  alert(message);
}

{
  // show another message
  let message = "Goodbye";
  alert(message);
}



// The similar thing holds true for for and while loops:

for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  alert(i); // 0, then 1, then 2
}

alert(i); // Error, no such variable

//--------------


//NESTED FUNCTION


// A function is called “nested” when it is created inside another function.

// It is easily possible to do this with JavaScript.

// We can use it to organize our code, like this:

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}


//Below, makeCounter creates the “counter” function that returns the next number on each invocation:

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2



//VAR SCOPE

//If a code block is inside a function, then var becomes a function-level variable:

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works
}

sayHi();
alert(phrase); // ReferenceError: phrase is not defined
// As we can see, var pierces through if, for or other code blocks. 
// That’s because a long time ago in JavaScript, blocks had no Lexical Environments, 
// and var is a remnant of that.

//-------------

//“var” tolerates redeclarations
//If we declare the same variable with let twice in the same scope, that’s an error:

let user;
let user; // SyntaxError: 'user' has already been declared
//With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John






