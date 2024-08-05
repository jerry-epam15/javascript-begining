//CLOUSER---

function outer(){
    var x=20;
    console.log(x);//20//functional scope
}

outer();
console.log(x);//undefined


//undefined is like that u decalred a variable but not intialized


function outer(){
    var x=20;
    return function inner(){
        console.log('hi i am inner function');
        console.log(x);//x is printed here due to clouser
    }
}

let result = outer();

result();

//closuer -- when inner function can access the outer scope variable 
