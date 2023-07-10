// Hello Admin
// Muhammad Asif - 10/07/2023

let usernames: string[] = ['admin', 'Asif', 'Faizan', 'Faheem', 'Mustansar'];

for (let username of usernames) {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
