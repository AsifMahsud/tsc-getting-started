// Unchanged magicians
// Muhammad Asif - 10/07/2023

export = {}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ['Harry Potter', 'Wednesday', 'Asif', 'Mustansar'];

const greatMagicians: string[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);
