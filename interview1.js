

// console.log(j);
// var vi=10;
// let j=0;
// console.log(window.j);




// var a =100; 
// function show(){
//     console.log(a)//undefined
//     var a =60 
//     let x =60 
//     console.log(a)// 60
//     { 
//         let x =40 
//     } 
//     console.log(x)//60
//  } 
//  show(); 
//  console.log(a);//100



// console.log(1);//1
// setTimeout(() => { console.log(2); }, 500);//
// setTimeout(() => { console.log(3);//
//     setTimeout(() => { console.log(4); }, 0);//
// }, 1000); 
// console.log("5");//5


// let x = true < 2; 
// console.log(x);



var y =40; 
function showY(){
     console.log(this.y);//40
     } 
     let user ={ 
        y:50, 
        z: this.y, 
        showY2:function(){ 
            console.log(this.y);//50
            function showY3(){ 
                console.log(this.z);//40
            } showY3(); 
        }, 
        showY4:()=>{ 
            console.log(this.z);//50
            function showY5(){ 
                console.log(this.y);//40
            } 
            showY5(); 
        } 
    }
showY();
user.showY2();
user.showY4();



// let x = "5"; 
// let y = 2; 
// console.log(x + y);//52 
// console.log(x - y);//3

//1
let user={
    name:10,
}
let user2={
    val:20,
    __proto__:user,
}
console.log(user2.name);

//2
let user3 = new Object();

//3



//window let never work and hoisting clarity 

hjhhih