// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var createdPassword = [""];
  createdPassword.join("");

  var minLength = 8;
  var maxLength = 128;
  var storedPassLength = 0;

  var keepSettingUp = true;

  var charTypeLowerBool = true;
  var charTypeUpperBool = true;
  var charTypeNumericBool = true;
  var charTypeSpecialBool = true;

  //The arrays containing the different selectable character types for the password generator
  var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","]","[","^","_","`","{","|","}","~"];
  var selectedChar = [""];

  //document.getElementById('password').innerHTML = "Generate Password";

  if (window.confirm("Let's begin setting up the structure of the password.")) {
     window.open(setupPasswordLength(), "Thanks for Visiting!");
  }

  //TODO:Create a function called generatePassword (it is referenced on line 6)

  //Here I am creating a function to setup the password length based upon user input between 8 - 128 characters.
  function setupPasswordLength()
  {
    var passwordLength = window.prompt("How long do you want your password to be (Between 8 - 128 characters).");

    if(passwordLength > minLength && passwordLength < maxLength)
    {
      storedPassLength = passwordLength;
      console.log("Store Password Length: " + passwordLength)
      console.log(lowerCaseChar);
      console.log(upperCaseChar);
      console.log(numericChar);
      console.log(specialChar);
      console.log(selectedChar);
      
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
      console.log("Choose Character Type");
      //I am determining that if the prompt is selected true, then it will be added as an option in the password. If false, it will not be added. This is marked by a boolean variable for each character type
      //Window pop-up to confirm if you want Lower Case Letters for the password
      var characterTypeLower = window.confirm("Lower Case Letters");
      if(characterTypeLower)
      {
        selectedChar.push.apply(selectedChar, lowerCaseChar);
       // charTypeLowerBool = true;
        console.log("Lower Case: " + charTypeLowerBool);
      }
      else
      {
        charTypeLowerBool = false;
      }
      //Window pop-up to confirm if you want Upper Case Letters for the password
      var characterTypeUpper = window.confirm("Upper Case Letters");
      if(characterTypeUpper)
      {
        selectedChar.push.apply(selectedChar, upperCaseChar);
       // charTypeUpperBool = true;
        console.log("Upper Case: " + charTypeUpperBool);
      }
      else
      {
        charTypeLowerBool = false;
      }
    //Window pop-up to confirm if you want Numeric Characters for the password
      var characterTypeNumeric = window.confirm("Numeric Characters");
      if(characterTypeNumeric)
      {
        selectedChar.push.apply(selectedChar, numericChar);
       // charTypeNumericBool = true;
        console.log("Numeric: " + charTypeNumericBool);
      }
      else
      {
        charTypeNumericBool = false;
      }
      //Window pop-up to confirm if you want Special Characters for the password
      var characterTypeSpecial = window.confirm("Special Characters");
      if(characterTypeSpecial)
      {
        selectedChar.push.apply(selectedChar, specialChar);
       // charTypeSpecialBool = true;
        console.log("Special: " + charTypeSpecialBool);
      }
      else
      {
        charTypeSpecialBool = false;
      }
      if (window.confirm("We will now generate the password.")) {
        window.open(generatePassword(), "Thanks for Visiting!");
    }

  }
  
  //Function to ultimately generate the password after the parameters have been selected
  function generatePassword(){
    console.log(storedPassLength);
    console.log(selectedChar);
     //TODO: Get this For Loop to populate the password given the conditions
     //For Loop to populate the password with the correct variables and length
     for(let i = 0; i < storedPassLength - 1; i++)
       {
         var randomElement = selectedChar[Math.floor(Math.random() * selectedChar.length)];
         createdPassword.push(randomElement);
         //createdPassword.push.apply(createdPassword, randomElement);
         createdPassword.join("");
          console.log(createdPassword);
       }
       //Removes the commas between characters for the password array
       let result = createdPassword.join('');
       //Add the password to the Password section in the HTML
       document.getElementById('password').innerHTML = result;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);