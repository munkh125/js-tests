//Creating a array
const cars = ["Saab", "Volvo", "BMW"];

const japan_cars = [
    "Nissan",
    "Honda",
    "Subaru"
];

const american_cars = [];
american_cars[0] = "Ford";
american_cars[1] = "Chevrolet";

const electric_cars = new Array("Tesla", "BMW", "Chevrolet");

let electric_car = electric_cars[0];

//Changing array element
japan_cars[0] = "Toyota";

//Converting Array to String
let arrayToString = cars.toString();

//Arrays are Objects
const person = {firstName:"John", lastName:"Doe", age:46};
person.firstName;

//Looping Array Elements
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

let carFor="";
japan_cars.forEach(myFunction);
function myFunction(value){
    carFor += `${value}`
}
console.log(carFor);

//Adding Array Elements
cars.push("MAN");
console.log(cars);

cars[cars.length] = "Subaru";

//How to Recognize an Array
console.log(Array.isArray(cars));
console.log(cars instanceof Array);