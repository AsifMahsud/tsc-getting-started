/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/

const friend_names: string[] = ['Mustansar', 'Faizan', 'Sadiq'];

console.log('Friends\' names:');
friend_names.forEach((name: string) => {
  console.log(name);
});
