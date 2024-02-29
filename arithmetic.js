let x = 123e5; // 12300000
let y = 123e-5; // 0.00123
x += 4; // x=x+4

console.log('1' + 2);//12
console.log(2 + '1');//21
console.log(2 + 2 + '1');//41
console.log('1' + 2 + 2);//14
console.log(6 -'2');//4
console.log('6'/'2');//3

console.log('Numeric conversion, unary +');
let z = 1;
console.log( +x );//1
let c = -2;
console.log( +y );//-2

console.log('Converts non-numbers to number like Number()');
console.log( +true);//1
console.log(+"");//0

let apples = '2';
let oranges = '3';
console.log(+apples + +oranges);//5
console.log(Number(apples) + Number(oranges));//5

console.log('Precendence table');
console.log('14 + unary plus');
console.log('14 - unary negation');
console.log('13 ** exponentiation');
console.log('12 * multiplication');
console.log('12 / division');
console.log('11 + addition');
console.log('11 - subtraction');
console.log('2 = assignment');
//"+apples + +oranges" 14 11 14

let n = 2;
n += 5;
n *=2; //n = 14

let m = 2;
n *= 3 + 5;// right part evaluated first, same as n *= 8  n = 16


let counter = 1;
let a = ++ counter;//2 gets new value 
let b = counter++;//1 gets old value

let v = (1 + 2, 3 + 4); //7 returns last result

