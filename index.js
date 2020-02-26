


var loCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var userLength = "";
var pass = "";
var button = document.addEventListener("click", genPassword());

userLength = prompt('What is the length of your password?');
var userChoices1 = confirm('Would you like your password to contain Lower Case Letters?');
var userChoices2 = confirm('Would you like your password to contain Upper Case Letters?');
// var userChoices2 = confirm('Would you like your password to contain Numbers?');
// var userChoices4 = confirm('Would you like your password to contain Special Characters');


    function genPassword(){

    if (userChoices1 === true) {       
        for (var i = 0; i <= userLength; i++) {
            pass = pass + loCase.charAt(Math.floor(Math.random() * Math.floor(loCase.length - 1)));
            
        }
    }
    else if(userChoices2 === true){
        for(var i = 0; i <= userLength; i++) {
            pass = pass + upCase.charAt(Math.random(Math.floor() * (Math.floor(userLength.length - 1))));
        }
    }
    document.getElementById("passOutput").value = pass;
}





