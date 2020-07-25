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

