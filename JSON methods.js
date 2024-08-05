//a complex object, and we’d like to convert it into a string, 
//to send it over a network, or just to output it for logging purposes.


let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

alert(user); // {name: "John", age: 30}


//instead of using this we have stringfy

//JSON.stringify

//The JSON (JavaScript Object Notation) is a general format to represent 
//values and objects. It is described as in RFC 4627 standard.

// JavaScript provides methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.


//here we JSON.stringify a student:

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

//alert(student)//it just show [object, object]

//The method JSON.stringify(student) takes the object and converts it into a string.

//The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object


//Please note that a JSON-encoded object has several important differences from the object literal:

// 1.Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// 2.Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

// JSON.stringify can be applied to primitives as well.

// JSON supports following data types:

// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.


// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]



// JSON is data-only language-independent specification, so some 
// JavaScript-specific object properties are skipped by JSON.stringify.

// Namely:

// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.


let user = {
    sayHi() { // ignored
        alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

alert(JSON.stringify(user)); // {} (empty object)

//The great thing is that nested objects are supported and converted automatically.

//For instance:

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

alert(JSON.stringify(meetup));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

// The important limitation: there must be no circular references.

// For instance:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON

//reference is allocated in a structure way 

//-----------

//Excluding and transforming: replacer

//2 type syntax of the stringify


// The full syntax of JSON.stringify is:

// let json = JSON.stringify(value[, replacer, space])


// value
// A value to encode.
// replacer
// Array of properties to encode or a mapping function function(key, value).
// space
// Amount of space to use for formatting
// Most of the time, JSON.stringify is used with the first argument only. 
//But if we need to fine-tune the replacement process, like to filter out 
//circular references, we can use the second argument of JSON.stringify.

// If we pass an array of properties to it, only these properties will be encoded.




let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}



// Here we are probably too strict. The property list is 
// applied to the whole object structure. So the objects in participants 
// are empty, because name is not in the list.

// Let’s include in the list every property except room.occupiedBy 
// that would cause the circular reference:

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/




///DOUBT 



let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/


//Formatting: space



// The third argument of JSON.stringify(value, replacer, space)
//  is the number of spaces to use for pretty formatting.

// Here space = 2 tells JavaScript to show nested objects on
//  multiple lines, with indentation of 2 spaces inside an object:




let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/


//The space parameter is used solely for logging and nice-output purposes

//Custom “toJSON”

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };
  
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */


//Here we can see that date (1) became a string. 
//That’s because all dates have a built-in toJSON method which returns such kind of string.

//Now let’s add a custom toJSON for our object room (2):


let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup = {
    title: "Conference",
    room
  };
  
  alert( JSON.stringify(room) ); // 23
  
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */



//JSON.parse

// To decode a JSON-string, we need another method named JSON.parse.

// The syntax:

// let value = JSON.parse(str[, reviver]);


// str
// JSON-string to parse.
// reviver
// Optional function(key,value) that will be called for each (key, value) pair and can transform the value.

// stringified array to the normal array converstion
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1



// Or for nested objects:

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1





