/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = 'mHammaD asIF';
// lowercase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
// titlecase
console.log(personName.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); }));
