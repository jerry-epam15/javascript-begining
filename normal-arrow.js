// Arrow functions, introduced in ECMAScript 2015 (also known as ES6), 
// provide a more concise syntax for writing function expressions. 
// They also have some distinct differences from traditional function 
// expressions in how they handle this, methods to define function methods, 
// and their syntax. Here are the key differences between normal functions and arrow functions



// Arrow functions allow a shorter syntax. If the function has a single expression, 
// you don't need to write return—it's implicit. 
// For a single-parameter function, you can skip parentheses around the parameter.

const add = (a, b) => a + b;


//this Context:

//          NORMAL FUNCTION 

//          The this keyword in a normal function
//          refers to the context in which the function 
//          was called (which can be different each time).

const obj = {
    id: 42,
    counter: function() {
      console.log(this.id);
    }
  };
  obj.counter(); // Outputs: 42

//          ARROW FUNCTION

//          Arrow functions do not have their own this context; 
//          they inherit it from the enclosing execution context. 
//          This is particularly useful in callbacks and event handlers.

const obj = {
    id: 42,
    counter: () => {
      console.log(this.id); // `this` is inherited from outer scope
    }
  };
  obj.counter(); // `this.id` will be undefined if this code is in the global scope


//Constructors:

//NORMAL FUNCTION : CAN BE USED AS CONSTRUCTOR 

function Person(name) {
    this.name = name;
  }
  const person = new Person("John");
  console.log(person.name);  // John

//Arrow Function: Cannot be used as constructors. 
//If you try to instantiate an arrow function with the new keyword, it throws an error.

const Person = (name) => {
    this.name = name;
  };
  // const person = new Person("John"); // Error: Person is not a constructor



//ARGUMENTS

//NORMAL FUNCTION : They have access to the arguments object 
//which is an array-like object containing all the parameters passed to the function.

function showArgs() {
    console.log(arguments);
  }
  showArgs(1, 2, 3); // Outputs: [1, 2, 3]

//ARROW FUNCTION : Do not have their own arguments object. 
//Any reference to arguments within the arrow function is resolved in the enclosing scope.

const showArgs = () => {
    console.log(arguments);
  };
  // showArgs(1, 2, 3); // ReferenceError: arguments is not defined



//NAMED FUNCTION 

//Normal Function: Can be named directly in their declaration.
//Arrow Function: Typically anonymous unless they are assigned to a 
//variable or property, thus getting a name through the variable or key they are assigned to.
//Choosing between normal functions and arrow functions 
//often depends on the specific needs of the context, including 
//considerations around how this is handled, and whether the function 
//needs to be used as a constructor.