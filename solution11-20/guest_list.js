/*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var guestList = ['Mustansar', 'Sadiq', 'Faizan'];
console.log('Invitations to Dinner:');
guestList.forEach(function (guest) {
    console.log("Aadaab ".concat(guest, " Sahab, aapko Dawat-e-Shaam mein mushtaarif honay ka khush aamdeed. Baraye meherbani humaray saath sham ko mil kar mazaydaar guftago aur lazeez khanay ka lutf uthayen."));
});
