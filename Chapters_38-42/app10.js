
let amount = prompt('Enter Amount (less than 1000)')
console.log("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
console.log("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
console.log("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
console.log("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));