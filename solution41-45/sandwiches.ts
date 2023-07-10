// Sandwiches
// Muhammad Asif - 10/07/2023

function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Chicken", "Bacon", "Avocado", "Mayonnaise");
