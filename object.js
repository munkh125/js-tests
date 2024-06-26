let user = new Object();
let user1 = {
  name: "John",
  age: 30,
  "likes birds": true,
};

console.log(user1.name);
console.log(user1.age);

user1.isAdmin = true; //create
delete user1.age; //delete

user1["likes dog"] = false; //create key with space

console.log(user1);

let key = "likes cat";
user1[key] = true; //user1["likes cat"] = true;

// let key1 = prompt("What do you want to know about the user?", "name");
// alert(user1[key1]);

function makeUser(name, age) {
  return {
    name: name, //can be name,
    age: age, //         age,
  };
}

let user3 = makeUser("Munkh", 23);
console.log(user3.name);

let user4 = {
  name, // same as name:name
  age: 20,
};

//Property existence test
console.log(user.noSuchProperty == undefined); //true means user has no property but can have undefined property
console.log("name" in user1); //true
console.log("lastname" in user1); //false

//for in loop
console.log("**************************************");
for (let key in user1) {
  console.log(key);
  console.log(user1[key]);
}
//ordered like an object
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};
for (let code in codes) {
  console.log(codes[code]); //integer properties are sorted "+49" "1.2" won't work
}
//if keys are non-integer, then they are listed in the creation order

let user13 = {};
// user13.name = "John";

let user12 = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(user13));
user13.age = 13;
console.log(isEmpty(user13));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let salary in salaries) {
  sum = sum + salaries[salary];
}
console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
