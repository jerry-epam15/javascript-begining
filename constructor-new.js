//Constructor, operator "new"


//Constructor function

// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.


function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false



// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.




//That’s the main purpose of constructors – to implement reusable object creation code.




// Inside a function, 
// we can check whether it was called with new or without it, using a special new.target property.


function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John



//Return from constructors

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.


For instance, here return overrides this by returning an object:

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object


// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):

function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name );  // John


//For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */


