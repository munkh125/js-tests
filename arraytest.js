const arrayTest = function (ar,array1, ...args) {
  console.log(ar);
  console.log(array1)
  console.log(...args);

};
arrayTest([1, 2, 3, 4], [3, 5], 6);
