//This to trigger off of pushing the generate password button.

//Store characters to feed the password
var symbolsSource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(symbolsSource);
var uppercaseSource = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseSource = [];
toLower = function (x) {
  return x.toLowerCase();
};
lowercaseSource = uppercaseSource.map(toLower);
console.log(lowercaseSource);
var specialCharactersSource = [
  " ",
  "!",
  "",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(specialCharactersSource); //Why Are " and \ messing with string?

// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbolsSource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var uppercaseSource = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseSource = [];
toLower = function (x) {
  return x.toLowerCase();
};
lowercaseSource = uppercaseSource.map(toLower);
var specialCharactersSource = [
  " ",
  "!",
  "",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(specialCharactersSource); //Why Are " and \ messing with string?

var randomArray = [];

// Save User Input
//ADD STEP TO MAKE SURE USER INPUTS NUMBER - IF/ELSE STATEMENT?
var passwordLength

function generatePassword() {
  passwordLength = parseInt(prompt("How many characters would you like?"));
  console.log(passwordLength);
  if (passwordLength === "") {
    prompt("Error: Password Length Cannot be blank");
  } else if (typeof passwordLength !== "number") {
    prompt("Error: Please enter numbers only");
  }

  //ADD STEP TO MAKE SURE USER INPUTS A NUMBER HIGHER THAN 8
  if (passwordLength >= 8) {
    alert("Thank you");
  } else {
    alert("Please select at least 8 characters");
    passwordLength = prompt("How many characters would you like?");
  }

  var specialCharacters = confirm("Would you like to use special characters?");
  console.log(specialCharacters);
  var lowercaseCharacters = confirm(
    "Would you like to use lower case letters?"
  );
  console.log(lowercaseCharacters);
  var uppercaseCharacters = confirm(
    "Would you like to use upper case letters?"
  );
  console.log(uppercaseCharacters);
  var symbols = confirm("Would you like to use symbols?");
  console.log(symbols);

  //Verify that user has selected at least one input-type
  if (
    specialCharacters == true ||
    lowercaseCharacters == true ||
    uppercaseCharacters == true ||
    symbols == true
  ) {
    //generate password - else/if statement to feed and randomize arrays
  } else {
    alert("Please refresh page and select at least one data type");
  }

  if (uppercaseCharacters == true) {
    randomArray = randomArray.concat(uppercaseSource);
  }
  if (lowercaseCharacters == true) {
    randomArray = randomArray.concat(lowercaseSource);
  }
  if (specialCharacters == true) {
    randomArray = randomArray.concat(specialCharactersSource);
  }
  if (symbols == true) {
    randomArray = randomArray.concat(symbolsSource)
  }
  //Add symbols and special characters
  console.log("hello");
  console.log(randomArray);

  //Randomize the new randomArray

  var encryptedArray = randomArray.sort(function(a, b) {
    return 0.5 - Math.random()
  });
  console.log(randomArray);
  console.log(encryptedArray);


var passwordArray = [];
console.log(typeof passwordLength);
for (let i = 0; i < passwordLength; i++) {
  var randomCharacter = encryptedArray[Math.floor(Math.random()*encryptedArray.length)];
  console.log(randomCharacter);
  passwordArray.push(randomCharacter);
  console.log()
}

return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function generatePassword() {
//   return "Add generated password here";
// };

// Add event listener to generate button
generate.addEventListener("click", writePassword);

// VERIFY THAT generatePassword function is working above //

// 1. Create variables to save user input from prompt

//passwordLength - string, will need to turn it into a number (look up online - built in method)
//specialCharacters - boolean (true or false)
//numericalCharacters - boolean
//lowercaseCharacters - boolean
//uppercaseCharacters - boolean
//alert, confirm, and prompt functions used here
//use alert function with an if statement (conditionals) to validate user input - Return "reload and enter reqd password" message if failed.
//validate input to make sure user selects at least 1 character type

// 2. Make variables (arrays) to store characters that will be fed to the password
// symbols
// uppercase
// lowercase
// special characters (Verify List in README file)

// 3. Use indexRandomizer function to select characters from each array

// 4. generatePassword function -- take user input, grab characters grom arrays, and generate a password

// 5. Create an empty array that represents the final password.

// 6. Join the character arrays to gether based on user input

// 7. Randomize characters from the joined arrays

// 8. Push at least 1 character from each selected array type into final password array

// 9. Transform the password array into a string
//console.log(elements.join(''));
// expected output: "FireAirWater"

// . Should be able to continually generate passwords -- while loop?

// Add style to make the app pop in a future portfolio //
