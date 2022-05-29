/* -------- RANDOM CODES -------- */

// Function to generate combination of characters
function generateCode() {
  //Create variables to store generated codes and the type of characters we want to show as codes
  var code = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy0123456789@#$";

  //Generate character multiple times using a loop
  for (let i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
  document.getElementById("submit").disabled = true;
}

disableButton();
