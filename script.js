var generateBtn = document.querySelector("#generate");

// create variables to store password categories 
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCase = "!@#$%^&*()_+[]{}|/~`".split("");

// ask the user for prompts and store them inside variables 
var passChar = prompt("How many characters do you want in your password?");
var wantLower = confirm("Do you want lower case characters in your password?");
var wantUpper = confirm("Do you wanr upper case characters in your password?");
var wantNum = confirm("Do you want numbers in your password?");
var wantSpc = confirm("Do you want special characters in your password?");

// create a function that takes the user prompts as arguments
function generatePassword(totalChar, passLow, passUpper, passNum, passSpc) {
  // create an empty array that will be populated once the user makes a selection of the type of password they want i.e lower, upper, number, etc. 
  var passArr = [];

  // create an empty array that will be populated with randomized characters that will eventually become the user's password 
  var result = [];

  // make sure that user enters a numerical value for the length of the password
  if (totalChar === "" || totalChar === null || isNaN(totalChar)) {
    alert("Please enter numerical value for the password's length!");
    return location.reload();
  }
   
  // make sure that user atleast selects one condition
  if (passLow === false && passUpper === false && passNum === false && passSpc === false) {
    alert("Please select atleast 1 criteria for the password!");
    return location.reload();
  }

  // check 1 of the password conditions of the length being between 8 and 128
  if (parseInt(totalChar) >= 8 && parseInt(totalChar) <= 128) {
    // if the user wants lower case characters then 
    if (passLow === true) {
      // for each character in the lowerCase variable "push" it into the passArr
      for (var i = 0; i < lowerCase.length; i++) {
        passArr.push(lowerCase[i]);
      }
    }
    // if the user wants upper case characters then 
    if (passUpper === true) {
      // for each character in the upperCase var "push" them into the passArr
      for (var i = 0; i < upperCase.length; i++) {
        passArr.push(upperCase[i]);
      }
    }
    // if the user wants numericals then
    if (passNum === true) {
      // for each character in the numbers var "push" them into the passArr
      for (var i = 0; i < numbers.length; i++) {
        passArr.push(numbers[i]);
      }
    }
    // if the user wants special characters then
    if (passSpc === true) {
      // for each character in the specialCase var "push" them into the passArr
      for (var i = 0; i < specialCase.length; i++) {
        passArr.push(specialCase[i]);
      }
    }

    // push the randomized characters from passArr into result array, passChar number of times 
    for (var i = 0; i < passChar; i++) {
      var randomNum = Math.floor(Math.random() * passArr.length);
      result.push(passArr[randomNum]);
    }
  }

  // if the user enters less than 8 or more than 128 characters as preference then the system should reprompt them to enter a valid number of characters
  else {
    alert("Please select between 8 and 128 characters!");
    return location.reload()
  }
  // joins the individual characters into the array as a "string"
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passChar, wantLower, wantUpper, wantNum, wantSpc);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);