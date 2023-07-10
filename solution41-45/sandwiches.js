// Sandwiches
// Muhammad Asif - 10/07/2023
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Chicken", "Bacon", "Avocado", "Mayonnaise");
