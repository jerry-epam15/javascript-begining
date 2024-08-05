alert( 'I’m JavaScript!' );

// if (true) {
//     var test = true; // use "var" instead of "let"
//   }
  
//   alert(test); // true, the variable lives after if


// if (true) {
//     let test = true; // use "let"
//   }
  
//   alert(test); // ReferenceError: test is not defined


// function sayHi() {
//     if (true) {
//       var phrase = "Hello";
//     }
  
//     alert(phrase); // works
//   }
  
//   sayHi();
//   alert(phrase); // ReferenceError: phrase is not defined


// let admin;
// let name;
// name='john';
// admin=name;
// alert(admin);

// no error
// let message = "hello";
// let message = 123456;

// alert(message);

// var a =10;
// var a =11;

// alert(a);

// let st ='strings'
// alert(st[2]);

// //alert(hello  ${1 + 2});
// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3

// **** IMP //
let str = 'HELLO';

str = 'h' + str.slice(1); // replace the string

alert( str.length); // hELLO
