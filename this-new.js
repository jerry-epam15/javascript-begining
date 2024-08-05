//WINDOW 

var x=20;
console.log(x)//20 output
console.log(window.x)//20
// global object is called window OBJECT
//*** */ at global level window refers to "this" this--current context***
 console.log(this.x)

//window === this 


//example of showing the show function in global phase

function show(){
    console.log("hi i m show function")
}

show();//
window.show();//same output 

this.show();

//ANY FUNCTION INSIDE THE FUNCTION INSIDE THE OBJECT IS METHOD
//RULES IN JS ABOUT THIS 

// 1> at global level this refers to window object // above example 
// 2>in method/function inside object "this" refres to owenr/current object
// 3> inside function at global level this refers to window

// 4> inside arrow function "this" refers to it surronding env/lexical env---
//reason is arrow function doenst have their own "this" value

//5 inside object if we have any method, and inside that method any inner function present then this refers to window----

// 6


//EXAMPLE 
//Property of the user are the id name show function


let user = {
    id:1,
    name:"test1",
    show:function(){
        console.log("i am show inside object")
        console.log(this); //this refers to user//rule 2
    }
}

user.show();

console.log(user.id)
console.log(user.name)
console.log(user.show())//all are this accessible 

//--------------



let emp = {
    name:"emp1",
    showInfo:function(){
        console.log(this)//emp as per Rule 2 
    }
}

emp.showInfo();

function greet(){
    console.log(this);//window//global level function //rule 3
}


greet();
//-------

const greet = ()=>{
    console.log(this)//surronding so here nothing so //window//rule 4
}

greet();

//----------

let company = {
    name:"EPAM",
    showName:function(){
        console.log(this);//compny
    },
    showName2:()=>{
        console.log(this);//window // arrow doesm't have  there own this so 
    }
}

company.showName();
company.showName2();



global execution context ----this---window
 inside the global        function execution context


let user = {
    name:"sameer mishra",
    showName:function(){
        console.log(this);//user
        function showname2(){
            console.log(this);//refers to window//rule 5 
        }
        showname2();
    }
}

user.showName();

//----------

let user = {
    name:"test1",
    showName:function(){
        console.log(this);//user
        const greet = ()=>{
            console.log(this);//user //surrounded by the showname 
        }

        greet();
    },
    showname2:()=>{
        console.log(this);//window
    }
}

user.showName();
user.showname2();

//-----------


quick trick to get "this"

function greet(){
    console.log(this);//window //rule 3 
}

// greet();//look who is calling //here no one calls anyone so //window
// window.greet();//similar of above
// this.greet()//similar of above 

let user = {
    name:"test1",
    showName:function(){
        console.log(this);//user

        function show2(){
            console.log(this);//window//none is calling here 
        }
        show2();//none is calling show2
    }
}

//----

user.showName();

var y = 40;

function showY(){
    console.log(this.y);//40
}
let user = {
    y:50,
    showY:function(){
        console.log(this.y);//50

        function showY2(){
            console.log(this.y);//40
        }
        showY2();
    },
    showY3:()=>{
        console.log(this.y);//40
        function showY4(){
            console.log(this.y);//40
        }
        showY4();
    }
}

user.showY();
user.showY3();
showY();

//-------


let user = {
    name:"test1",
    showName:function(){
        console.log(this.name);//test1
        const xyz = ()=>{
            console.log(this.name);//test1
        }
        xyz();
    }
}

user.showName();



