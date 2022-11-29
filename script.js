// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to generate password with user input
// 1- Present a series of prompt for password criteria
// 2- Ask the user input for Character type of the password
// Lowercase, Uppercase, Numercase and Special haracter
// 3- Generate the password 
// 4- Display the password

var characterLength = 8;
var choiceArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  characterLength = parseInt(prompt('How many character do you want your password to be? (8 - 128'));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character has to be a Number 8 - 128 Digits. Please try again.');
    return false;
  }

  if (confirm('Would you like Lowercase letters in your password?')) {
    choiceArr = choiceArr.concat(lowerCasedCharacters)
  }

  if (confirm('Would you like Uppercase letters in your password?')) {
    choiceArr = choiceArr.concat(upperCasedCharacters)
  }

  if (confirm('Would you like Special characters in your password?')) {
    choiceArr = choiceArr.concat(specialCharacters)
  }

  if (confirm('Would you like Numbers in your password?')) {
    choiceArr = choiceArr.concat(numericCharacters)
  }
  return true;

}


function generatePassword() {
  //I would generatePassword based on the prompts

  var password = '';
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
   var correctPrompts = getPasswordOptions(); //either true or false
   var passwordText = document.querySelector('#password');

   if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
   } else {
    passwordText.value = '';
   }
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);