//Iterable objects are a generalization of arrays. 
//That’s a concept that allows us to make any object useable in a for..of loop.


//Symbol.iterator

// For instance, we have an object that is not an array, but looks suitable for for..of.

// Like a range object that represents an interval of numbers:


let range = {
    from: 1,
    to: 5
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

// To make the range object iterable (and thus let for..of work) 
// we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

// When for..of starts, it calls that method once (or errors if not found). 
// The method must return an iterator – an object with the method next.
// Onward, for..of works only with that returned object.
// When for..of wants the next value, it calls next() on that object.
// The result of next() must have the form {done: Boolean, value: any}, 
// where done=true means that the loop is finished, otherwise value is the next value.


//with explaination


let range = {
    from: 1,
    to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// now it works!
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}


//without explaination


let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}

//here in the above question range converted to an iterator
//the loop starts and check for the range object and then it moves to the object 
//then the iterator function happens 
//then it set the current as from 
//then it return to the next()
//in the next iteration happen and return if more iteration require done:false , value : {respective value}
//if no iteration left then = done: true 



//String is iterable
for (let char of "test") {
    // triggers 4 times: once for each character
    alert(char); // t, then e, then s, then t
}

let str = '𝒳😂';
for (let char of str) {
    alert(char); // 𝒳, and then 😂
}



//Calling an iterator explicitly

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // outputs characters one by one
}


//Array.from

//There’s a universal method Array.from that takes an iterable or array-like value 
//and makes a “real” Array from it. Then we can call array methods on it.

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)




// assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25




// Here we use Array.from to turn a string into an array of characters:

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2


