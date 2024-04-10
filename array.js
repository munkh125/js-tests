//Creating a array
const cars = ["Saab", "Volvo", "BMW"];

const japan_cars = ["Nissan", "Honda", "Subaru"];

const american_cars = [];
american_cars[0] = "Ford";
american_cars[1] = "Chevrolet";

const electric_cars = new Array("Tesla", "BMW", "Chevrolet");

let electric_car = electric_cars[0]; //Tesla

//Changing array element
japan_cars[0] = "Toyota";

//Converting Array to String
let arrayToString = cars.toString();

//Arrays are Objects
const person = { firstName: "John", lastName: "Doe", age: 46 };
person.firstName;

//Looping Array Elements
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

let carFor = "";
japan_cars.forEach(myFunction);
function myFunction(value) {
  carFor += `${value}`;
}
console.log(carFor);

//Adding Array Elements
cars.push("MAN");
console.log(cars);

cars[cars.length] = "Subaru";

//How to Recognize an Array
console.log(Array.isArray(cars));
console.log(cars instanceof Array);

//JS Array Methods

//Array length
let size = cars.length; //5
console.log(`Cars array: ${cars}`);
console.log(`Cars array length: ${size}`);

//toString()
console.log(cars.toString()); //Saab,Volvo,BMW,MAN,Subaru

//at()
let secondCar = cars.at(2); //BMW third element
console.log(secondCar);
let secondCarA = cars[2];
console.log(secondCarA);

//join()
let join = cars.join(" * "); //Saab * Volvo * BMW * MAN * Subaru
console.log(join);

//pop() removes last element from array returns removed element
let popCar = cars.pop();
console.log(cars);
console.log(popCar);

//push() adds a new element to an array (at the end) returns new array length
let push = cars.push("Suzuki");
console.log(cars);
console.log(push);

//shift() removes first element shift all elements to a lower index returns shifted element
let shift = cars.shift();
console.log(cars);
console.log(shift);

//unshift() adds a new element to an array (at the beginning) unshift older elements returns new array length
cars.unshift("Saab");
console.log(cars);

//length easy way to append new element to an array
cars[cars.length] = "Subaru";

//delete() leaves undefined HOLES in the array use pop() shift() instead
// delete cars[0];

//concat() creates new array using existing arrays
const name1 = ["Layla", "Amanda"];
const name2 = ["Tom", "Leo", "John"];
const name3 = ["Peter", "Steve", "George"];
const names = name1.concat(name2, name3);
console.log(names);

const names2 = names.concat("Carl");
console.log(names2);

//copyWithin()copies array elements to another position in an array
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let copyWithin = alphabets.copyWithin(2, 0); //index 0 ees 2luu huul
//['A', 'B', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
console.log(copyWithin);
let copyWithin2 = alphabets.copyWithin(2, 0, 3); // A B A gh met
//['A', 'B', 'A', 'B', 'A', 'D', 'E', 'F', 'G', 'H']
console.log(copyWithin2);

//flat() creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = myArr.flat();
//[1, 2, 3, 4, 5, 6]
console.log(flat);

//splice() add new items to an array returns an array with the deleted items
const numbers = ["1", "2", "3", "4", "5"];
let splice = numbers.splice(2, 2, "6", "7");
//first parameter (2) defines the position where new elements should be added
//second parameter (0) defines how many elements should be removed
//rest of parameters define the new elements to be added
console.log(numbers);
console.log(splice);
let spliceRemove = numbers.splice(0, 1); //remove element using splice
console.log(numbers);
console.log(spliceRemove);
//toSpliced() creates a new array keeping original array unchanged
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);

//slice() slices out a piece of an array into a new array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice = fruits.slice(1); //['Orange', 'Lemon', 'Apple', 'Mango']
const slice2 = fruits.slice(1, 3); //['Orange', 'Lemon']
console.log(fruits);
console.log(slice);
console.log(slice2);

// ---------------- SEARCH ---------------------
//indexOf() searches an array for an element value returns its position
let position = fruits.indexOf("Apple");
//array.indexOf(item,start);where to start the search
console.log(fruits.toString());
console.log(`Index of apple is: ${position}`);
//lastIndexOf() same bur searches from behind

//includes()
console.log(fruits.includes("Banana")); //true

//find()
const number = [4, 9, 16, 25, 36];
let first = number.find(findFunction);
function findFunction(value, index, array) {
  return value > 18;
}
console.log(first); //25
//findIndex() returns the index of the first array element that passes a test function
//3

// findLast() start from the end of an array and
// return the value of the first element that satisfies a condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(`first element higher than 40 is ${high}`);
//findLastIndex() finds the index of the last element that satisfies a condition
let pos = temp.findLastIndex((x) => x > 40);
console.log(`index of first element higher than 40 is ${pos}`);

// ---------------- SORT ---------------------
const sortArray = ["Banana", "Apple", "Orange", "Mango"];
//sort() sorts an array alphabetically
//toSorted(); safe way to sort
console.log(sortArray);
console.log(sortArray.sort());
const sorted = sortArray.toSorted();
console.log(sorted);
//reverse() reverse the elements in an array
//toReversed() safe way to reverse
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);
//[1, 5, 10, 25, 40, 100]

// ---------------- ITERATION ---------------------
//forEach() calls a function once for each array element
const data = [1, 4, 9, 16, 25, 36];
let txt = "";
data.forEach(forFunction);
function forFunction(value, index, array) {
  txt += value + "\n";
}
console.log(data);
console.log(txt);

//map() creates new array
const data2 = data.map(mapFunction);
function mapFunction(value, index, array) {
  return value * 2;
}
console.log(data2);

//flatMap() maps all elements of an array then creates new array by flattening the array
const data3 = data.flatMap((x) => x * 3);
console.log(data3);

//filter() creates a new array with array elements that pass a test
const over18 = data.filter(filterFunction);

function filterFunction(value, index, array) {
  return value > 18;
}
console.log(over18); //[25, 36]

//reduce() reduce array to single value, doesn't reduce original array
//reduceRight()
let reduce = data.reduce(reduceFunction);
function reduceFunction(total, value, index, array) {
  return total + value;
}
console.log(reduce);
let reduce2 = data.reduce(reduceFunction, 100); //can add initial value
console.log(reduce2);

//every() checks if all array values pass a test
let allOver18 = data.every(everyFunction);
function everyFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18); //false

//some checks if some array values pass a test
let someOver18 = data.some(everyFunction);
console.log(someOver18); //true

//Array.from() create an array from a string
console.log(Array.from("ABCDEFG"));

//Array.keys() returns an array iterator object with the keys of an array
//entries() create an array iterator and then iterate over the key/value pairs
//[0, "Banana"]
//[1, "Orange"]

//with() update elements in an array without altering the original array
const data4 = data.with(2, "10");
console.log(data4);

//... spread expands an iterable into more elements
const q1 = ["jan", "feb", "mar"];
const q2 = ["apr", "may", "jun"];
const q3 = ["jul", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year); //['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
