"use strict";
// Large Shirt
// Muhammad Asif - 10/07/2023
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\"."));
}
make_shirt(); // Large shirt with default message
make_shirt('medium'); // Medium shirt with default message
make_shirt('small', 'Hello World!'); // Custom-sized shirt with a different message
module.exports = {};
