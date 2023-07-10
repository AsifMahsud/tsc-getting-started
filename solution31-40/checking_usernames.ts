// Checking usernames
// Muhammad Asif - 10/07/2023

let current_users: string[] = ['admin', 'Asif', 'Faizan', 'Faheem', 'Mustansar'];
let new_users: string[] = ['Admin', 'Ali', 'Asif', 'Hussain', 'Imran'];

for (let new_username of new_users) {
  let usernameExists = current_users.some(current_username => current_username.toLowerCase() === new_username.toLowerCase());
  
  if (usernameExists) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}
