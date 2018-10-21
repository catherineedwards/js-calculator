// This calculator is not recommended for official use
// Please do not use if you value accuracy
// YMMV

window.onload = function() {
  //add event listeners for all buttons
  document.getElementById("one").addEventListener("click", calc);
  document.getElementById("two").addEventListener("click", calc);
  document.getElementById("three").addEventListener("click", calc);
  document.getElementById("four").addEventListener("click", calc);
  document.getElementById("five").addEventListener("click", calc);
  document.getElementById("six").addEventListener("click", calc);
  document.getElementById("seven").addEventListener("click", calc);
  document.getElementById("eight").addEventListener("click", calc);
  document.getElementById("nine").addEventListener("click", calc);
  document.getElementById("zero").addEventListener("click", calc);
  document.getElementById("percent").addEventListener("click", calc);
  document.getElementById("divide").addEventListener("click", calc);
  document.getElementById("multiply").addEventListener("click", calc);
  document.getElementById("minus").addEventListener("click", calc);
  document.getElementById("equals").addEventListener("click", calc);
  document.getElementById("plus").addEventListener("click", calc);
  document.getElementById("decimalPoint").addEventListener("click", calc);
  document.getElementById("allClearButton").addEventListener("click", calc);
  document.getElementById("clearEntry").addEventListener("click", calc);
};

// initialise our variables
var entries = [];

// start the calc function
function calc(event) {
  // take the text from the button, and turn it into a number
  var buttonText = this.innerText;

  if (isNaN(parseFloat(buttonText))) {
    // test for all non-number buttons
    if (buttonText === "AC") {
      // add All Clear functionality
      entries = [];
      document.getElementById("answer").value = "";
    } else if (buttonText === "CE") {
      // add Clear Entry functionality
      clearEntries();
    }

    function clearEntries() {
      while (entries.length > 0) {
        // remove the last entry from the entries array
        var entry = entries.pop();
        if (!Number.isInteger(entry) && entry !== ".") {
          // checking for strings except for the decimal place
          // pushing the operand back onto the entries
          entries.push(entry);
          break;
        }
      }
    }

    switch (buttonText) {
      case "X":
        entries.push("*");
        break;
      case "÷":
        entries.push("/");
        break;
      case "+":
        entries.push("+");
        break;
      case "-":
        entries.push("-");
        break;
      case ".":
        entries.push(".");
        break;
      case "=":
        entries.push("=");
        break;
    }
  } else {
    // val is a number, add to answer text
    entries.push(parseFloat(buttonText));
  }

  var newAnswer = "";

  for (let i = 0; i < entries.length; i++) {
    // check through the entries and add them to newAnswer as a string
    newAnswer += entries[i];

    if (entries[i] === "=") {
      // if the user has clicked the equals sign
      // the purpose of this section is to combine numbers and decimal points together to form a float
      // create new arrays for numbers and operands
      // create a temporary string field
      // we push the number preceding the operand to numbers array
      // we push the number following the operand to tempString
      var numbers = [];
      var operands = [];
      var tempString = "";
      for (let j = 0; j <= i; j++) {
        if (!isNaN(parseFloat(entries[j])) || entries[j] === ".") {
          // if it's a number or a decimal, push it to string
          tempString += entries[j];
        } else {
          // convert our tempString to our float, and add it to our numbers array
          numbers.push(parseFloat(tempString));
          // if it's an operand, push it to operands
          operands.push(entries[j]);
          // clear tempString so we can continue adding numbers to the equation
          tempString = "";
        }
      }
      // create a tempAnswer where we will store our known calculations
      var tempAnswer = 0;

      checkOperands(operands);

      // initialise newAnswer as the output of tempAnswer
      newAnswer = tempAnswer;
      // store newAnswer in entries should the user want to continue calculations
      entries = [newAnswer];
    }
    function checkOperands (operands) {
      // check what operand is being used, and perform the operation based on operand
      // taking into account the presence of any operations completed prior
      for (let k = 0; k < operands.length - 1; k++) {
        if (operands[k] === "*") {
          if (k < 1) {
            tempAnswer = numbers[k] * numbers[k + 1];
          } else {
            tempAnswer = tempAnswer * numbers[k + 1];
          }
        } else if (operands[k] === "/") {
          if (k < 1) {
            tempAnswer = numbers[k] / numbers[k + 1];
          } else {
            tempAnswer = tempAnswer / numbers[k + 1];
          }
        } else if (operands[k] === "+") {
          if (k < 1) {
            tempAnswer = numbers[k] + numbers[k + 1];
          } else {
            tempAnswer = tempAnswer + numbers[k + 1];
          }
        } else if (operands[k] === "-") {
          if (k < 1) {
            tempAnswer = numbers[k] - numbers[k + 1];
          } else {
            tempAnswer = tempAnswer - numbers[k + 1];
          }
        }
      }
      return operands
    }
  }
  // push current answer to answer field on index page
  document.getElementById("answer").value = newAnswer;
}
