let time = 12;
if(time < 10){
    greeting = "Good morning";
}else if (time < 20){
    greeting = "Good afternoon";
}else{
    greeting = "Good evening";
}
console.log(greeting);

//ternary
time = 9;

(time < 10) ? greeting = "Good morning" : 
(time < 20) ? greeting = "Good afternoon" : 
              greeting = "Good evening";
console.log(greeting);


input_number = prompt("Enter number",0)

switch(Number(input_number)){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Wrong input";
}
console.log(day);


// || 
// &&
// !