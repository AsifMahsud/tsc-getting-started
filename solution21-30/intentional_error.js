// Intentional Error
// Muhammad Asif - 10/07/2023
var numbers = [1, 2, 3, 4, 5];
// Intentional error: Accessing an index that is out of bounds
// console.log(numbers[10]);
// Correcting the error
if (numbers[10]) {
    console.log(numbers[10]);
}
else {
    console.log('Index out of bounds. Please provide a valid index within the array bounds.');
}
// Accessing a valid index
console.log(numbers[2]);
