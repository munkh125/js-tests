let text = "Hello World!";
console.log(text);

let length = text.length;
console.log(length); //12

let charAt4 = text.charAt(4);
console.log(charAt4); //o

let charCodeAt4 = text.charCodeAt(3);
console.log(charCodeAt4); //108

let At = text.at(2);
console.log(At); //l

let stringArray = text[2];
console.log(stringArray); //l
//Hello World!
let slice = text.slice(6, 11); //count from 0 counts from where pointer is
console.log(slice); //World
let sliceNegative = text.slice(-6); //counting from the end can be used in substr
console.log(sliceNegative); //World!
let sliceNegative2 = text.slice(-6, -1); //between -6 and -1
console.log(sliceNegative2); //World

let subString = text.substring(0, 5); // similar to slice
console.log(subString); //Hello

let subStr = text.substr(6, 5); //second parameter specifies the length
console.log(subStr); //World

let upper = text.toUpperCase();
console.log(upper);
let lower = text.toLowerCase();
console.log(lower);

let text2 = "It's me";
let text3 = text.concat(" ", text2); //Hello World! It's me
console.log(text3);

let trim = text.trim();
console.log(trim);
let trimStart = text.trimStart(); // remove whitespace only from start of a string
let trimEnd = text.trimEnd();

let padStart = text.padStart(15, "0"); // adds 0 in start until it reaches given length
console.log(padStart); //string method so .toString(); need
//000Hello World!

let padEnd = text.padEnd(15, "x");
console.log(padEnd);
//Hello World!xxx

let repeat = text.repeat(2); //repeats
console.log(repeat);
//Hello World!Hello World!

let replace = text.replace("World", "Uranus"); //Hello Uranus!
console.log(replace);
let replace2 = text.replace(/WORLD/i, "Uranus"); //Hello Uranus!
let replaceAll = text.replaceAll("World", "Uranus"); //Hello Uranus!

let split = text.split(" "); //split , return first splitted array
console.log(split);
