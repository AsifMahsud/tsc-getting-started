// Seeing the World
// 10/07/2023

let placesToVisit: string[] = ['Silicon Valley', 'Dubai', 'Multan', 'Karachi', 'K2', 'Gilgit'];

console.log('Original Order:');
console.log(placesToVisit);

console.log('Alphabetical Order (without modifying the actual list):');
console.log([...placesToVisit].sort());

console.log('Original Order (unchanged):');
console.log(placesToVisit);

console.log('Reverse Alphabetical Order (without modifying the actual list):');
console.log([...placesToVisit].sort().reverse());

console.log('Original Order (unchanged):');
console.log(placesToVisit);

console.log('Reversed Order:');
console.log(placesToVisit.reverse());

console.log('Original Order (reversed):');
console.log(placesToVisit.reverse());

console.log('Alphabetical Order:');
console.log(placesToVisit.sort());

console.log('Reverse Alphabetical Order:');
console.log(placesToVisit.reverse());
