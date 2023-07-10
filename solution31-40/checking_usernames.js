// Checking usernames
// Muhammad Asif - 10/07/2023
var current_users = ['admin', 'Asif', 'Faizan', 'Faheem', 'Mustansar'];
var new_users = ['Admin', 'Ali', 'Asif', 'Hussain', 'Imran'];
var _loop_1 = function (new_username) {
    var usernameExists = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
    if (usernameExists) {
        console.log("The username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
