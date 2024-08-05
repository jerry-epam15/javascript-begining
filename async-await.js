// Async/await
// There’s a special syntax to work with promises in a more comfortable fashion, 
// called “async/await”. It’s surprisingly easy to understand and use.

//Async functions

//Let’s start with the async keyword. It can be placed before a function, like this:

async function f() {
  return 1;
}

//The word “async” before a function means one simple thing: a function always 
//returns a promise. Other values are wrapped in a resolved promise automatically.

//For instance, this function returns a resolved promise with the result of 1; let’s test it:

async function f() {
  return 1;
}

f().then(alert); // 1
//…We could explicitly return a promise, which would be the same:

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
//So, async ensures that the function returns a promise, and wraps non-promises in it. 
//Simple enough, right? But not only that. There’s another keyword, await, that works only 
//inside async functions, and it’s pretty cool.



//Await

//The syntax:

// works only inside async functions
let value = await promise;
//The keyword await makes JavaScript wait until that promise settles and returns its result.

//Here’s an example with a promise that resolves in 1 second:

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();



//Let’s take the showAvatar() example from the chapter Promises chaining and 
//rewrite it using async/await:

// We’ll need to replace .then calls with await.
// Also we should make the function async for them to work.
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();


