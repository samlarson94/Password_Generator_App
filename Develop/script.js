
// Add variable to kick off password generation - select from id in HTML.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generate.addEventListener("click", writePassword);

//Store characters to feed the password - Symbols, Uppercase, Lowercase, and Special Characters
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
console.log(specialCharactersSource); //Note to self - Why Are " and \ characters messing with string?

// Create empty array to store randomized characters
var randomArray = [];

// Add prompts and corresponding variables to store user input
var passwordLength

function generatePassword() {
  passwordLength = parseInt(prompt("How many characters would you like?"));
  
  //ADD STEP TO MAKE SURE USER INPUTS A NUMBER - How to make this refresh after more than one error?
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

  //Verify that user has selected at least one of the input types
  if (
    specialCharacters == true ||
    lowercaseCharacters == true ||
    uppercaseCharacters == true ||
    symbols == true
  ) {
  } else {
    alert("Please refresh page and select at least one data type");
  }
  //Generate password - if statements to verify and feed random array
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
    console.log(randomArray);

//Randomize randomArray and feed it into new scrambledArray to pull the password from

  var scrambledArray = randomArray.sort(function(a, b) {
    return 0.5 - Math.random()
  });
  console.log(randomArray);
  console.log(scrambledArray);

//Create new passwordArray that will store the correct amount of symbols/characters from the scrambledArray
var passwordArray = [];
console.log(typeof passwordLength);

//Create for-loop that randomizes scrambledArray, stores in new variable, and then 
for (let i = 0; i < passwordLength; i++) {
  var randomCharacter = scrambledArray[Math.floor(Math.random()*scrambledArray.length)];
  console.log(randomCharacter);
  passwordArray.push(randomCharacter);
  console.log("Random Characters: " + randomCharacter)
}

return passwordArray.join("");
}

// Write password to the #password id input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// VERIFY THAT generatePassword function is working above //

// Additional Stying Practice //

document.getElementById("password").style.color = "green";

var changeClass = document.querySelector('.card');
  changeClass.setAttribute('style', 'background-color: #00FF41')
  changeClass.style.border = '5px solid black';
  changeClass.style.boxShadow = '15px 15px black';
  changeClass.style.display = 'flex';
  changeClass.style.flexDirection = "column";
  changeClass.style.justifyContent = 'center';
  changeClass.style.alignItems = 'center';
