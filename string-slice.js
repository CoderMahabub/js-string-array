//split():
const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(words);
// console.log(withoutA);

//slice();
const smallSlice = anthem.slice(5, 11);
// console.log(smallSlice);

//substr(11,7)
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);


//substring()
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

//concat
const first = 'Amader';
const second = 'City';
const fullString = first.concat(second).concat('Abc');
/* fullString = first + second; */
// console.log(fullString);

//Join
const wordss = ['a', 'b', 'c', 'd'];
// const allJoined = wordss.join('');
// const allJoined = wordss.join(' ');
const allJoined = wordss.join(', ');
console.log(allJoined);
