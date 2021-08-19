function addNumbers(num1, num2) {
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 50);
// console.log(sum);


function getFullName(firstName, lastname) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const myname = getFullName("hanif", "bin", "sonket");
console.log(myname);