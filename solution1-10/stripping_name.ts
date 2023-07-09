/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let person_name = ' \n\tAsif Khan\n\t    \n\t'
console.log('With whitespace')
console.log(person_name)

const stripped_person_name = person_name.trim()
console.log('Without whitespace')
console.log(stripped_person_name)