/*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/

const guestList: string[] = ['Mustansar', 'Sadiq', 'Faizan'];

console.log('Invitations to Dinner:');
guestList.forEach((guest: string) => {
    console.log(`Aadaab ${guest} Sahab, aapko Dawat-e-Shaam mein mushtaarif honay ka khush aamdeed. Baraye meherbani humaray saath sham ko mil kar mazaydaar guftago aur lazeez khanay ka lutf uthayen.`);
});
