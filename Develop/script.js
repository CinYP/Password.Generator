
//DOM Element declaration
const resultElement = document.getElementById('password');
const lengthElement = document.getElementById('number');
const lowerCaseElement = document.getElementById('lowerCase');
const upperCaseElement = document.getElementById('upperCase');
const characterSpecialElement = document.getElementById('characterSpecial');
const characterNumericElement = document.getElementById('characterNumeric');
const generateBtn = document.getElementById('generate');
// starter code provided: var generateBtn = document.querySelector("#generate");



//greating an object for the variables that will create the password
  let randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  }
  //creating functions for reach of the selected options. 
let lowerchar = "abcdefghijklmnopqrstuvwxyz"
let upperchar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numberchar = "123456789"
let symbolchar = "!@#$%^&*()_-+=?.,<>;:"


//generating functions to randomly assign a character to the length later on 
  function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+ 97 )
    }

  function getRandomUpper(){
      return String.fromCharCode(Math.floor(Math.random()*26) + 65)
    }
    
  function getRandomNumber(){
      return String.fromCharCode(Math.floor(Math.random()*10)+48)
    }
    
  function getRandomSymbol() {
      let symbols  = '!@#$%^&*()_-+=/{}[]~`';
      for ( var i = 0; i < symbols.length; i++ ) {
        return symbols.charAt(Math.floor(Math.random() * 
    symbols.length));
     }
  }

// Generate Event Listener 
generateBtn.addEventListener('click', () => {
  let length = lengthElement.value;
  let clickLower = lowerCaseElement.checked;
  let clickUpper = upperCaseElement.checked;
  let clickNumb =  characterNumericElement.checked;
  let clicksymbol = characterSpecialElement.checked;


  resultElement.innerText = generatePassword(clickLower, clickNumb, clickUpper, clicksymbol,length);
// the innerText property of the HTMLElement interface represents the rendered text - A string representing the rendered text content of an element.
//this should return the text to the screen?

});

// Password function 
// Write password to the #password input
function generatePassword (lower, upper, number, symbol, length) {
  //creating initial password variables
  //variable to generate passowrd and we're setting this equal to an empty string 
console.log(lower, upper, number, symbol);

let potentialPassword = "";
let generatedPassword = "";

//This if statement ensures that the user inputs a password length larger than 8 but lower than 128
if(length <8 || length> 128){
  alert("Password needs to be between 8 and 128")
  return;
}

if (lower){
  let singlelowerchar = randomFunctions.lower();
  potentialPassword += lowerchar
} 
if (upper){
  let singleupperchar = randomFunctions.upper();
  potentialPassword += upperchar
}
if (symbol){
  let singlesymbolchar = randomFunctions.symbol()
  potentialPassword += symbolchar
} 
if (number){
  let singlelowerchar = randomFunctions.number();
  potentialPassword += numberchar
} 

//creating a for-loop for selected buttons and choices, that will generate password
for (i = 0; i <length; i++) {
  var randomindexpassword = Math.floor(Math.random()* potentialPassword.length)
  var randomcharacter = potentialPassword[randomindexpassword]
console.log(randomindexpassword, randomcharacter);
  generatedPassword += randomcharacter
}
console.log(generatedPassword);

return generatedPassword;
}


