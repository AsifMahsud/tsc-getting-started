"use strict";
// Great Magicians
// Muhammad Asif - 10/07/2023
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['Harry Potter', 'Wednesday', 'Asif', 'Mustansar'];
make_great(magicians);
show_magicians(magicians);
module.exports = {};
