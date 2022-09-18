// Assignment Code
/*let numeValue = document.querySelector(#charactersreqd);
let caseLower = document.querySelector(#lowerCase);
let caseUpper = document.querySelector(#upperCase);
let specialChact = document.querySelector(#characterSpecial);
let numericVl = document.querySelector(#characterNumeric);
let pwRequrements = document.querySelectorAll(".pw-parameters"); */

var passwordInputs = {
  numeValue = document.querySelector(#charactersreqd);

  caseLower = document.querySelector(#lowerCase);

  caseUpper = document.querySelector(#upperCase);

  specialChact = document.querySelector(#characterSpecial);
  
  numericVl = document.querySelector(#characterNumeric);

  pwRequrements = document.querySelectorAll(".pw-parameters");
}

function numeValue() {
  var result           = '';
  var characters       = '0123456789';
  charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return;
}

numeValue();

console.log()

function caseLower(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return;
}





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//addEventListener('input', (event) =>{});
//oninput = (event) => { };

pwRequrements.forEach('input', (event) => {};addEventListener(click,() => {
 writePassword()

  let randNum = Math.floor(Math.random)
} )); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
