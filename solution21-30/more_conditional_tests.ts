// More conditional tests
// Muhammad Asif - 10/07/2023

export = {}

// Tests for equality and inequality with strings
let city: string = 'Islamabad';

console.log("Is city == 'Islamabad'? I predict True.");
console.log(city == 'Islamabad');

console.log("Is city != 'Lahore'? I predict True.");
console.log(city != 'Lahore');

console.log("Is city == 'Karachi'? I predict False.");
console.log(city == 'Karachi');

console.log("Is city != 'Islamabad'? I predict False.");
console.log(city != 'Islamabad');

// Tests using the lowercase function
let name: string = 'Asif';

console.log("Is name.toLowerCase() == 'asif'? I predict True.");
console.log(name.toLowerCase() == 'asif');

console.log("Is name.toLowerCase() == 'ASIF'? I predict False.");
console.log(name.toLowerCase() == 'ASIF');

// Numerical tests
let age: number = 25;

console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);

// Tests using "and" and "or" operators
let isStudent: boolean = false;
let hasJob: boolean = true;

console.log("Is isStudent and hasJob? I predict False.");
console.log(isStudent && hasJob);

console.log("Is isStudent or hasJob? I predict True.");
console.log(isStudent || hasJob);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'mango', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'kiwi' not in the fruits array? I predict True.");
console.log(!fruits.includes('kiwi'));

console.log("Is 'mango' not in the fruits array? I predict False.");
console.log(!fruits.includes('orange'));
