//Interaction: alert, prompt, confirm


//INSERTING THE VALUE TO THE ALERT 

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
//here if the value 100 is changed in the promt comes as the popping the then
//output will comes as 'you are 90 years old'


//CONFIRM 

let isBoss = confirm("Are you the boss?");//USED FOR OK OR CANCEL

alert( isBoss ); // true if OK is pressed


//ASK FUNCTION

// The major difference between a real-life ask and the example above is that real-life 
// functions use more complex ways to interact with the user than a simple confirm.


// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

//OR

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );