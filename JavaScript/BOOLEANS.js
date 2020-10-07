// Booleans

// Boolean is a fancy word for true or false values
// Boolean values in JavaScript must be written in lowercase
// Example: true | false
// Booleans can be useful when combined with conditionals

// Example:
function garageDoorOpener(x){
  let garageDoorOpen = x;
  if (garageDoorOpen == true) { // <-- Boolean used with a conditional
    console.log('The Garage door is open.');
  } else {
    console.log('The Garage door is Shut.');
  }
};

garageDoorOpener(true);
garageDoorOpener(false);
garageDoorOpener(true);
garageDoorOpener(false);
