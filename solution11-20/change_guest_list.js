/*
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
var originalGuestList = ['Mustansar', 'Sadiq', 'Faizan'];
console.log('Original Guest List:');
console.log(originalGuestList);
// One guest can't make it
var unableToAttend = originalGuestList.pop();
console.log("Unfortunately, ".concat(unableToAttend, " won't be able to attend the dinner."));
// Replace with a new guest
var newGuest = 'Imran Khan';
originalGuestList.push(newGuest);
console.log("We have invited ".concat(newGuest, " to join the dinner."));
console.log('Updated Guest List:');
console.log(originalGuestList);
console.log('Invitations to Dinner:');
originalGuestList.forEach(function (guest) {
    console.log("Aadaab ".concat(guest, " Sahab, aapko Dawat-e-Shaam mein mushtaarif honay ka khush aamdeed. Baraye meherbani humaray saath sham ko mil kar mazaydaar guftago aur lazeez khanay ka lutf uthayen."));
});
