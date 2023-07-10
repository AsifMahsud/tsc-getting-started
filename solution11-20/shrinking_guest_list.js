"use strict";
// Shrinking Guest List
// Muhammad Asif - 17/07/2023
var guestList = ['Mustansar', 'Sadiq', 'Faizan'];
console.log('Original Guest List:');
console.log(guestList);
// One guest can't make it
var unableToAttend = guestList.pop();
if (unableToAttend) {
    console.log("Unfortunately, ".concat(unableToAttend, " won't be able to attend the dinner."));
}
// Replace with a new guest
var newGuest = 'Imran Khan';
guestList.push(newGuest);
console.log("We have invited ".concat(newGuest, " to join the dinner."));
// More space available
console.log('Great news! We found a bigger dinner table.');
// Add one new guest to the beginning of the array
var newGuestBeginning = 'Abdul Sattar Edhi';
guestList.unshift(newGuestBeginning);
// Append one new guest to the end of the array
var newGuestEnd = 'Obama';
guestList.push(newGuestEnd);
// Add one new guest to the middle of the array
var newGuestMiddle = 'Mahatma Gandhi';
guestList.splice(Math.floor(guestList.length / 2), 0, newGuestMiddle);
console.log('Updated Guest List:');
console.log(guestList);
console.log('New Invitations to Dinner:');
guestList.forEach(function (guest) {
    console.log("Aadaab ".concat(guest, " Sahab, aapko Dawat-e-Shaam mein shamil hony k ly invite karty hain"));
});
console.log('Sorry, the new dinner table won\'t arrive in time. We can only invite two people for dinner.');
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ". We won't be able to invite you to dinner."));
    }
}
console.log('Final Guest List:');
console.log(guestList);
console.log('Invitations to the Remaining Guests:');
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner. We look forward to having you."));
});
guestList = [];
console.log('Empty Guest List:');
console.log(guestList);
module.exports = {};
