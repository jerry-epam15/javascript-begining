//Prototypal inheritance

// For instance, we have a user object with its properties and methods, 
//and want to make admin and guest as slightly modified variants of it. 
//We’d like to reuse what we have in user, not copy/reimplement its methods, 
//just build a new object on top of it.

// Prototypal inheritance is a language feature that helps in that.


//[[Prototype]]

//In JavaScript, objects have a special hidden property 
//[[Prototype]] (as named in the specification), that is either null or 
//references another object. That object is called “a prototype”:


// When we read a property from object, and it’s missing, 
// JavaScript automatically takes it from the prototype. In programming, 
// this is called “prototypal inheritance”.



// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// One of them is to use the special name __proto__, like this:


//__proto__-----------------------

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
  
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


//Now if we read a property from rabbit, and it’s missing, 
//JavaScript will automatically take it from animal.



let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true


// Here the line (*) sets animal to be the prototype of rabbit.

// Then, when alert tries to read property rabbit.eats (**), it’s not in rabbit, 
// so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up):



//Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

// So if animal has a lot of useful properties and methods, then they become automatically 
// available in rabbit. Such properties are called “inherited”.

// If we have a method in animal, it can be called on rabbit:


let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk


// The prototype chain can be longer:

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)




// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try 
//to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.



// The __proto__ property is a bit outdated. It exists for historical reasons, 
// modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf 
// functions instead that get/set the prototype. 


//---------------------------------------



//Writing doesn’t use prototype


// The prototype is only used for reading properties.

// Write/delete operations work directly with the object.

// In the example below, we assign its own walk method to rabbit:

let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!



// From now on, rabbit.walk() call finds the method immediately in the object and executes 
// it, without using the prototype:



// Accessor properties are an exception, as assignment is handled by a setter function. 
// So writing to such a property is actually the same as calling a function.

// For that reason admin.fullName works correctly in the code below:


let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected


// Here in the line (*) the property admin.fullName has a getter in the prototype user, 
// so it is called. And in the line (**) the property has a setter in the prototype, so it is called.



//The value of “this”


// the value of this inside set fullName(value)? Where are the properties 
// this.name and this.surname written: into user or admin?

// The answer is simple: this is not affected by prototypes at all.

// No matter where the method is found: in an object or its prototype. 
// In a method call, this is always the object before the dot.

// So, the setter call admin.fullName= uses admin as this, not user.



// That is actually a super-important thing, because we may have a big object with many methods, 
// and have objects that inherit from it. And when the inheriting objects run the inherited methods,
//  they will modify only their own states, not the state of the big object.

// For instance, here animal represents a “method storage”, and rabbit makes use of it.

// The call rabbit.sleep() sets this.isSleeping on the rabbit object:

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)


//--------------------------------------

//for…in loop



//The for..in loop iterates over inherited properties too.

//For instance:

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats


// If that’s not what we want, and we’d like to exclude inherited properties,
// there’s a built-in method obj.hasOwnProperty(key): it returns true if obj 
// has its own (not inherited) property named key.

// So we can filter out inherited properties (or do something else with them):

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

// Looking at the chain we can see that the method is provided by 
// Object.prototype.hasOwnProperty. In other words, it’s inherited.

// Just like all other properties of Object.prototype, it has enumerable:false 
// flag. And for..in only lists enumerable properties. That’s why it and the rest 
// of the Object.prototype properties are not listed.


//F.prototype

