// Strings

// Strings are just plain text to a computer.
// Strings use numbers, letters, punctuation, symbols, words, or emoji.
// "" , '' , or `` must be used to encapsulate a string.
// Example:

let doubleQuoteString = "This is a 'string' in 'doublequotes', with punctuation inside.";

let singleQuoteString = 'This is a string in Single Quotes, with punctuation inside.\nYou are not allowed to use single quotes, inside of a single-quoted string!\nHowever, a single set of "doublequotes" may be used.';

let singleQuoteStringWithEscape = 'This is a string in \'singlequotes\', using the backslash \'\\\' escape character, to allow singlequotes, or multiple sets of "doublequotes" within the \"string\".\nIf you need to do this, using backticks is a cleaner method.';

let backTickString = `This is a Back-Tick String, it allows 'single-quotes', "doublequotes", $, <, -, #, =, +, @, *, -, %, &, etc.'`;

console.log(doubleQuoteString);
console.log(singleQuoteString);
console.log(backTickString);
console.log(singleQuoteStringWithEscape);

// String Properties:
// String Properties are like variables built into JavaScript
// You can use them to manipulate your strings in various ways

// "string".length;
// This property will tell you how many characters long the string is
// The 'length' property will also count whitespaces as characters
// Example:
let maryPoppins = "supercalifragilisticexpialidocious";
let maryPoppinsWhiteSpaces = "supercalifragi  listicexpia  lidocious";

console.log("The string" + maryPoppins + " is exactly " + maryPoppins.length + " characters long.\nI know thats true, because 'length' told me so.");
console.log("The string " + maryPoppinsWhiteSpaces + " is exactly " + maryPoppinsWhiteSpaces.length + " characters long.\nI know thats true, because 'length' told me so.");



// String Methods:
// String methods are like functions for manipulating string data

// "STRING".toLowerCase();
// Will convert the text in the string to lowercase
// Example:
let allUpperCaseString = "THIS STRING IS WRITTEN IN ALL CAPS!";
console.log(allUpperCaseString);
console.log(allUpperCaseString.toLowerCase());

// The same can be done in reverse by using '"string".toUpperCase;'
let allLowerCaseString = "this string is all lowercase!";
console.log(allLowerCaseString);
console.log(allLowerCaseString.toUpperCase());


// "string".trim();
// Trim will remove begginning and ending whitespaces
// However, it will leave the inner whitespaces
let stringThatNeedsTrimmed = "   This is a string that's in need of a '.trim()'     ";
console.log(stringThatNeedsTrimmed);
console.log(stringThatNeedsTrimmed.trim());
