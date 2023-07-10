/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/
var greet_friend_names = ['Mustansar', 'Faizan', 'Sadiq'];
console.log('Greetings to friends:');
greet_friend_names.forEach(function (name) {
    console.log("Hello ".concat(name, ", How are you doing today? Hope you're enjoying typescript."));
});
