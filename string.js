let text = "Hello World!";
console.log(text);

let length = text.length;
console.log(length);

let charAt4 = text.charAt(4);
console.log(charAt4);

let charCodeAt4 = text.charCodeAt(4);
console.log(charCodeAt4);

let At = text.at(2);
console.log(At);

let stringArray = text[2];
console.log(stringArray);

let slice = text.slice(6, 11); //count from 0 counts from where pointer is
console.log(slice);
let sliceNegative = text.slice(-6);//counting from the end can be used in substr
console.log(sliceNegative);
let sliceNegative2 = text.slice(-6, -1);//between -6 and -1 
console.log(sliceNegative2);

let subString = text.substring(0, 5);// similar to slice
console.log(subString);

let subStr = text.substr(6, 5);//second parameter specifies the length
console.log(subStr);

let upper = text.toUpperCase();
let lower = text.toLowerCase();
console.log(upper);
console.log(lower);

let text2 = "It's me";
let text3 = text.concat(" ", text2);
console.log(text3);

let trim = text.trim();
console.log(trim);
let trimStart = text.trimStart();// remove whitespae only from start of a string
let trimEnd = text.trimEnd();

let padStart = text.padStart(15, "0");// adds 0 in start until it reaches given length
console.log(padStart);//string method so .toString(); need

let padEnd = text.padEnd(15, "x");
console.log(padEnd);

let repeat = text.repeat(2);//repeats
console.log(repeat);

let replace = text.replace("World", "Uranus");
console.log(replace);
let replace2 = text.replace(/WORLD/i, "Uranus");

let replaceAll = text.replaceAll("World","Uranus");

let split = text.split(" ");//split , return first splitted array
console.log(split);