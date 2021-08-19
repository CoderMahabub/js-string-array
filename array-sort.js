//sort
const numbers = [9, 4, 6, 2, 6, 7, 8, 1, 3, 4, 9, 8];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'jashim', 'rajjak', 'anower', 'dipjol', 'badsha'];
const sortedFriends = friends.sort();
//reverse the array elements
const reversed = sortedFriends.reverse();
// console.log(reversed);
// console.log(sortedFriends);

//number sorting fun with 2 digits or more digits value
const bigNumbers = [66, 58, 81, 99, 23, 54, 76, 46, 2, 54, 66, 88, 99, 11, 22, 33, 4, 44, 55];
const sortedBigNumbers = bigNumbers.sort(function (x, y) {
    return x - y;
});
console.log(sortedBigNumbers);