/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/

const greet_friend_names: string[] = ['Mustansar', 'Faizan', 'Sadiq'];

console.log('Greetings to friends:');
greet_friend_names.forEach((name: string) => {
  console.log(`Hello ${name}, How are you doing today? Hope you're enjoying typescript.`);
});
