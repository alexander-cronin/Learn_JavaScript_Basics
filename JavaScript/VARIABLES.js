// Variables in Javascript

// There are 3 ways to declare a variable in Javascript
// The oldest method is to use the keyword 'var'
// var keyword will globally declare your variables

// Example:
var a = 10;
var b = 20;
var penny = 0.01;
var nickel = 0.05;
var dime = 0.10;
var quarter = 0.25;
var halfDollar = 0.50;
var dollar = 1.00;
var twoDollar = 2.00;
var fiveDollar = 5.00;
var tenDollar = 10.00;
var twentyDollar = 20.00;

// Variables can be concatenated into another variable
// Example:
var answer = twentyDollar + fiveDollar * twentyDollar;

// You can use 'console.log(variable)' to output to the 'console'
// 'console.log' can also concatenate variables, with strings, etc
// Example:
console.log(twentyDollar + " + " + fiveDollar + " * " + twentyDollar + " = $" + answer);

// Wrap strings in doublequotes
// Whitespace within doublequotes will be rendered to console
// Example:
console.log("a = " + a);

console.log("b = " + b);

// Variables and math can be used together to assign another variable
// Example:
var c = a + b * a;
console.log("The answer to this math equation is: " + c);

// Variables can be re-assigned new values, at any time
// Example:
var a = 5;
console.log("a = " + a);
// The '+=' assigns the value of 'variable' + 'variable'
// Example:
a += a;
console.log("a = " + a);

// We must be careful to not overwrite builtin keywords as variables
// Valid variable names
// Examples:
var kamalaCaseCamelJockeyVariable = "lowercase 1st word, uppercase first letter of nth word";
var item486 = "hobgoblin";
var YOU_ARE_COOL_ = false;
var _gumGumGattlingGun_ = "Guma Guma! Gattliiing Gun!!!!";
// Even symbols can be used as variable names, but not 'Operators'
var $_$ = "money eyes";
var $iAmAVariable = "yup, it's a variable";
console.log($iAmAVariable);

// Invalid Variable Names: (Leave them commented, or you'll get an error!)

// 'Operators' may not be used in a variable name
////  var tax% = 22;

// Variables cannot begin with a number
////  var 2fast2catch = "bold claim";

// The following 2 examples overwrite builtin Javascript keywords
////  var function = false;
////  var class = "easy";

// Variables can be assigned new values
// Example:
var cat = "cat";
console.log("Variable 'cat' = " + cat);
cat = "dog";
console.log("Variable 'cat' = " + cat);

// Avoid naming variables with case differentiated names
// Example, don't do this...
var CatFish = "Catfish";
var catFish = "Different Catfish"

// Use 'let' keyword to declare 'local variables' rather than 'global variables' such as those created with 'var' keyword
let localVariable = "I am 'let' in a global scope!";
console.log(localVariable);

// The 'let' keyword can declare a variable within the scope it's written into
// Above we declared 'var cat = "dog";'
function testScope(){
  // Here we set the value of cat, within the scope of this function
  let cat = "dinosaur";
  // Here we prove that a 'cat' inside this function is a 'dinosaur'
  console.log(cat);
  return 0;
};
// Check 'cat' value outside of our function
console.log(cat);
// Calling the 'testScope' function to test the value changes of cat.
testScope();
// Check the value of 'cat' outside of the function, to see if it was altered
console.log(cat);

// Constants:

// Constants are immutable once assigned, they cannot be re-assigned
const NAME = "John Doe";
////  NAME = "Jane Doe";  <== This will not work, you will get a crash!

// Constants should be named in 'ALL_CAPS'
// This makes it obvious to other devs, that they're constants
const ALL_UPPER_CASE = "Constant!";

console.log(ALL_UPPER_CASE);
// End of Document
