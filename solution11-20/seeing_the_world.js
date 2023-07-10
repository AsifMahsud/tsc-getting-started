// Seeing the World
// 10/07/2023
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ['Silicon Valley', 'Dubai', 'Multan', 'Karachi', 'K2', 'Gilgit'];
console.log('Original Order:');
console.log(placesToVisit);
console.log('Alphabetical Order (without modifying the actual list):');
console.log(__spreadArray([], placesToVisit, true).sort());
console.log('Original Order (unchanged):');
console.log(placesToVisit);
console.log('Reverse Alphabetical Order (without modifying the actual list):');
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
