// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var minLength = 8;
  var maxLength = 128;
  var keepSettingUp = true;

  var charTypeLowerBool = true;
  var charTypeUpperBool = true;
  var charTypeNumericBool = true;
  var charTypeSpecialBool = true;

  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var selectedChar = "";

  if (window.confirm("Let's begin setting up the structure of the password.")) {
     window.open(setupPasswordLength(), "Thanks for Visiting!");
  }

  //TODO:Create a function called generatePassword (it is referenced on line 6)

  //Here I am creating a function to setup the password legnth based upon user input between 8 - 128 characters.
  function setupPasswordLength()
  {
    while(keepSettingUp === true)
    {
      var passwordLength = window.prompt("How long do you want your password to be (Between 8 - 128 characters).");

      if(passwordLength > minLength && passwordLength < maxLength)
      {
        console.log("Store Password Length: " + passwordLength)
        
        if (window.confirm("Thank you for inputing the length. Now we will select the different character types for the password.")) {
          window.open(chooseCharacterType(), "Thanks for Visiting!");
       }
      }
      else
      {
        if (window.confirm("Invalid input. Please restart password length section.")) {
          window.open(setupPasswordLength(), "Thanks for Visiting!");
       }
      }
    }
    //Here I am creating a function that will run through the process of choosing the different character types 
    function chooseCharacterType()
    {
      //I am determining that if the prompt is selected true, then it will be added as an option in the password. If false, it will not be added. This is marked by a boolean variable for each character type
      var characterTypeLower = window.confirm("Lower Case Letters");
      if(characterTypeLower.confirm === true)
      {
        charTypeLowerBool = true;
      }
      else
      {
        charTypeLowerBool = false;
      }
      var characterTypeUpper = window.confirm("Upper Case Letters");
      if(characterTypeUpper.confirm === true)
      {
        charTypeUpperBool = true;
      }
      else
      {
        charTypeLowerBool = false;
      }
      var characterTypeNumeric = window.confirm("Numeric Characters");
      if(characterTypeNumeric.confirm === true)
      {
        charTypeNumericBool = true;
      }
      else
      {
        charTypeNumericBool = false;
      }
      var characterTypeSpecial = window.confirm("Special Characters");
      if(characterTypeSpecial.confirm === true)
      {
        charTypeSpecialBool = true;
      }
      else
      {
        charTypeSpecialBool = false;
      }
    }

  }
  function generatePassword(){
     
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
