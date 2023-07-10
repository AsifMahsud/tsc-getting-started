// Large Shirt
// Muhammad Asif - 10/07/2023

export = {}

function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it will have the message: "${message}".`);
}

make_shirt(); // Large shirt with default message
make_shirt('medium'); // Medium shirt with default message
make_shirt('small', 'Hello World!'); // Custom-sized shirt with a different message
