// Create a variable named myAge, and set it equal to your age as a number.
let myAge = 25; // Replace 25 with your actual age

// Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;

// Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5.
earlyYears *= 10.5;

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = "Your Name".toLowerCase(); // Replace "Your Name" with your actual name

// Write a console.log statement that displays your name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
