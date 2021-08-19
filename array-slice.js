//slice (Slice korle original array theke remove hoy na)
const numbers = [3, 4, 5, 6, 7, 64, 8, 5, 4, 34, 87];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);


//spliced (Splice korle original array theke remove hoye jay)
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);


//remove number and replace with other number from third value of spliece
const numberSpliced2 = numbers.splice(4, 3, 55, 55, 55);
console.log(numberSpliced2);
console.log(numbers);