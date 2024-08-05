//F-PROTOTYPE

// new objects can be created with a constructor function, like new F().

// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.


// F.prototype here means a regular property named "prototype" on F. It sounds something 
// similar to the term “prototype”, but here we really mean a regular property with this name.


let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  alert( rabbit.eats ); // true





// Setting Rabbit.prototype = animal literally states the following: 
// "When a new Rabbit is created, assign its [[Prototype]] to animal".


//Default F.prototype, constructor property


// Every function has the "prototype" property even if we don’t supply it.

// The default "prototype" is an object with the only property constructor
//  that points back to the function itself.


function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true

Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)


// We can use constructor property to create a new object using the 
// same constructor as the existing one.

//Like here:

function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");


// …JavaScript itself does not ensure the right "constructor" value.

// Yes, it exists in the default "prototype" for functions, but that’s all. 
// What happens with it later – is totally on us.

// In particular, if we replace the default prototype as a whole, then there will 
// be no "constructor" in it.


function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

// So, to keep the right "constructor" we can choose to 
// add/remove properties to the default "prototype" instead of overwriting it as a whole:

