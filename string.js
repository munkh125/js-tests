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
let sliceNegative = text.slice(-6);//counting from the end
console.log(sliceNegative);
let sliceNegative2 = text.slice(-6, -1);//between -6 and -1 
console.log(sliceNegative2);