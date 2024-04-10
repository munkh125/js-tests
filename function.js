//function declaration can be called earlier than it is defined
function myFunction() {
  alert("Hello");
}
let copiedFunction = myFunction;
myFunction();
copiedFunction();
//function expression is created when the execution reaches it and is usable only from that moment
//can be used outside of scope
//declare variable outside of scope assign it in function scope
let sayHi = function () {
  console.log("Hi!");
};

sayHi();

//function can read outer variable if there is nothing inside

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

//anonymous function
ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution");
  }
);

//arrow function example
let sum = (a, b) => a + b;
console.log(sum(1, 2));
let more = (a, b, c) => {
  return a + b + c;
};
console.log(more(1, 2, 3));
