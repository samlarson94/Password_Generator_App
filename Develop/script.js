// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return "password here";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// VERIFY THAT generatePassword function is working above //

// 1. Create variables to save user input from prompts
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

