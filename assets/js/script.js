// Assignment code here

var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "1234567890";
var specialCharater = "~!@#$%^&*()_+`{}|[]\;':,./<>?";


function generatePassword (){

    var userSelection = []

    var lowercaseCharacter = confirm("Will it require lowercase letters?");
    var uppercaseCharacter = confirm("Will it require uppercase letters?");
    var numberCharacter = confirm("Will it require numbers?");
    var specialCharater = confirm("will it require special characters?");

    if ((lowercaseCharacter===false) && (uppercaseCharacter===false) && (numberCharacter===false) && (specialCharater===false))

    var passwordLength = prompt ("What is the password length need? Min: 8 Max: 128")

    if ((passwordLength < 8) || (passwordLength > 128)){
        alert("Please choose password length.")
    }

    if (lowercaseCharacter) {
        for(var i = 0; i < lowercaseCharacter.length; i++)
        userSelection.push(lowercaseCharacter[i])
    }

    if (uppercaseCharacter) {
        for(var i = 0; i < uppercaseCharacter.length; i++)
        userSelection.push(uppercaseCharacter[i])
    }

    if (numberCharacter) {
        for(var i = 0; i < numberCharacter.length; i++)
        userSelection.push(numberCharacter[i])
    }

    if (specialCharacter) {
        for(var i = 0; i < specialCharacter.length; i++)
        userSelection.push(specialCharacter[i])
    }

    var passwordResult = [];
    for(i=0; i <passwordLength; i++){
        passwordLength.push(userSelection[Math.floor(Math.random()* userSelection.length)]);
    }

    return(passwordResult.join(""));
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
