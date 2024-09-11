let user2 = new Object();
let user1 = {};
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};
console.log(user.name);
console.log(user.age);

user.isAdmin = true;

delete user.age;
console.log(user["likes birds"]);

//set
user1["likes birds"] = true;
//get
console.log(user1["likes birds"]);
//delete
delete user1["likes birds"];

//same as user["likes birds"] = true;
let key = "likes dogs";
user[key] = true;
