"use strict";
// Cars
// Muhammad Asif - 10/07/2023
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    return car;
}
var car = createCar("Toyota", "Camry", ["color", "silver"], ["year", 2022], ["features", ["GPS", "Bluetooth"]]);
console.log(car);
module.exports = {};
