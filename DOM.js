//Browser environment, specs

// A platform may be a browser, or a web-server or another host, or even a “smart” coffee machine 
// if it can run JavaScript. Each of these provides platform-specific functionality. 
// The JavaScript specification calls that a host environment.

// A host environment provides its own objects and functions in addition to the language core. 
// Web browsers give a means to control web pages. Node.js provides server-side features, and so on.


// There’s a “root” object called window. It has two roles:

// First, it is a global object for JavaScript code, as described in the chapter Global object.
// Second, it represents the “browser window” and provides methods to control it.



//DOM (Document Object Model)

// The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

// The document object is the main “entry point” to the page. We can change or 
// create anything on the page using it.

// For instance:

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
// Here, we used document.body.style, but there’s much, much more. 
// Properties and methods are described in the specification: DOM Living Standard.

// The DOM specification explains the structure of a document and provides objects to manipulate it. 
// There are non-browser instruments that use DOM too.

// For instance, server-side scripts that download HTML pages and process them can also use the DOM. 
// They may support only a part of the specification though.