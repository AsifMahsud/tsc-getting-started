// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Muhammad Asif - 10/07/2023

// Object representing information about a city
const city1: { name: string, population: number, language: string } = {
    name: 'Karachi',
    population: 15741000,
    language: 'Sindhi'
};

const city2: { name: string, population: number, language: string } = {
    name: 'Lahore',
    population: 12188000,
    language: 'Punjabi'
};

const city3: { name: string, population: number, language: string } = {
    name: 'Islamabad',
    population: 1095064,
    language: 'Urdu'
};

const city4: { name: string, population: number, language: string } = {
    name: 'Peshawar',
    population: 1970042,
    language: 'Pashtu'
};

// Print information about the cities in Pakistan
console.log('City 1:');
console.log(city1);

console.log('City 2:');
console.log(city2);

console.log('City 3:');
console.log(city3);

console.log('City 4:');
console.log(city4);
