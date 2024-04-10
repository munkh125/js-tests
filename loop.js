for (let i = 0; i < 10; i++) {
  console.log(`For : ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break; //exits when i = 5
    //continue; skips 5
  }
  console.log(`break : ${i}`);
}

let i = 0;
while (i < 10) {
  console.log(`While : ${i}`);
  i++;
}

//executes at least one
let j = 0;
do {
  console.log(`do while: ${j}`);
  j++;
} while (j < 10);
