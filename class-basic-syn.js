//The “class” syntax



//The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}



//Then use new MyClass() to create a new object with all the listed methods.

//The constructor() method is called automatically by new, so we can initialize the object there.

//For example:

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();


//What is a class?


// In JavaScript, a class is a kind of function.

// Here, take a look:

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function


