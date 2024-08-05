// Arrow functions, the basics


// arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

//OR 

// In other words, it’s the shorter version of:

let func = function (arg1, arg2, ..., argN) {
    return expression;
};



//OR

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert(double(3)); // 6

//NOT PARAMETERS TO PASS

// If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();


//CONDITIONAL  FUNCTION 

For instance, to dynamically create a function:

    let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome();



//Multiline arrow functions


let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum(1, 2)); // 3


//QUESTIONS 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

//ANSWER MAKE TO THE ARROW FUNCTION 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

