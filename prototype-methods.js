//Prototype methods, objects without __proto__

// The modern methods to get/set a prototype are:

// 1.Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// 2.Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

// The only usage of __proto__, that’s not frowned upon, is as \
// a property when creating a new object: { __proto__: ... }.

// Although, there’s a special method for this too:

// Object.create(proto[, descriptors]) – creates an empty object with given proto 
// as [[Prototype]] and optional property descriptors.


let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
alert(rabbit.eats);//undefined



// The Object.create method is a bit more powerful, as it has an optional second argument: 
// property descriptors.

// We can provide additional properties to the new object there, like this:

let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true



