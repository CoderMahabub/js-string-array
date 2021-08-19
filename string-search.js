const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    ' Dell 1X59 lenovo commercial yoga Laptop',
    'HTC low price Phone',
    'Dell  purple color phone with laptop'
];
const searching = 'Dell';
// indexOf
const output = [];
for (product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// Same work using includes
for (product of product) {
    if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// startsWith
for (product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);