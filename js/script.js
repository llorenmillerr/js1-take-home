function logMessage() {

// Prompt user for number
var num = prompt('What is your favorite number?', '7');

// Validate that user response is real integer
if ( isNaN(parseInt(num)) ) {
  // try again if false
  num = prompt(`I'm sorry.. I don't recognize that number. Can you try again with a whole integer?`)
};

// Validate that user response is real integer a second time
if ( isNaN(parseInt(num)) ) {

  // if false 2 times, end
  num = prompt(`Interesting.. are you sure those were Hindu–Arabic numerals?`)

} else {

// if integer, square
numSquared = square(num);

// alert user with squared value
alert(`Wow, thats a neat number! The square root of ${num} is ${numSquared}!`);

};

// prompt user for a sentance
var phrase = prompt('In a sentence, how has your day been so far?');

// alert sentence with proper capitilization and punctioaction
alert(capFirstLet(phrase));

// take a random string
var gibberish = prompt(`Okay, give me a random string of gibberish and I'll give you back a similar but slightly different string of gibberish`);

// alert the same string cut in half with order switched
alert(splitAndSwitch(gibberish));

};
















// ========= FUNCTIONS ========= //


// SQUARE FUNCTION
function square(number) {
  return number * number;

};


// CAPITALIZE FIRST LETTER OF STRING FUNCTION
function capFirstLet(string) {
  // seperate and capitalize first letter
  let firstLet = string.substr(0, 1);
  firstLet = firstLet.toUpperCase();

  // seperate and lowercase rest of statement
  let rest = string.substr(1);
  rest = rest.toLowerCase();

  // check if string ends with period
  if (string.substr(-1) != '.') {
    // if false, add punctioaction
    return phrase = firstLet + rest + ".";

  } else {
    // if true return orginial string
    return phrase = firstLet + rest;

  };

};


// SPLIT AND REVERSE ORDER
function splitAndSwitch (string) {

  // section off first half of string
  let firstHalf = string.substr(0, string.length / 2);

  //grab second half of string
  let secondHalf = string.substr(string.length / 2);

  // return both halves in reverse order
  return secondHalf + firstHalf;
};








//
