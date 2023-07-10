// Cars
// Muhammad Asif - 10/07/2023

export = {}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    let car: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let option of options) {
        let [key, value] = option;
        car[key] = value;
    }

    return car;
}

let car = createCar("Toyota", "Camry", ["color", "silver"], ["year", 2022], ["features", ["GPS", "Bluetooth"]]);
console.log(car);
