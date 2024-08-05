//Garbage collection

//here it discuss about the memory management


//Reachability

//The main concept of memory management in JavaScript is reachability.

//“reachable” values are those that are accessible or usable somehow.
//They are guaranteed to be stored in memory.

// There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

// For instance:

// 1.The currently executing function, its local variables and parameters.
// 2.Other functions on the current chain of nested calls, their local variables and parameters.
// 3.Global variables.
// (there are some other, internal ones as well)
// 4.These values are called roots.

// 5.Any other value is considered reachable if it’s reachable from a root by 
//a reference or by a chain of references.


//For instance, if there’s an object in a global variable, and 
//that object has a property referencing another object, that object is 
//considered reachable. And those that it references are also reachable.



//-----
// There’s a background process in the JavaScript engine that is called garbage collector. 
// It monitors all objects and removes those that have become unreachable.
//-----


//Two references

// imagine we copied the reference from user to admin:

// Now if we do the same:

user = null;
//Then the object is still reachable via admin global variable, 
//so it must stay in memory. If we overwrite admin too, then it can be removed.


//INTERLINKED OBJECT 

//IF THERE IS NO INCOMING REFERENCE THEN THAT OBJECT IS DELETED 

//Unreachable island

//suppose the main object fully interlinked object made null other all object are deleted 



//Internal algorithms

// The basic garbage collection algorithm is called “mark-and-sweep”.

// The following “garbage collection” steps are regularly performed:

// 1.The garbage collector takes roots and “marks” (remembers) them.
// 2.Then it visits and “marks” all references from them.
// 3.Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
// 4.…And so on until every reachable (from the roots) references are visited.
// 5.All objects except marked ones are removed.



// Some of the optimizations:

// Generational collection
// Incremental collection
// Idle-time collection



