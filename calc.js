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

var entries = [];
var total = 0;
var result = 0;

function calc(event) {
  var buttonText = this.innerText;
  var val = parseFloat(buttonText);
  console.log(entries);
  console.log(total);
  console.log(val);
  console.log(result);

  if (isNaN(val)) {
    // test all non-number buttons
    if (buttonText === "AC") {
      // add All Clear functionality
      entries = [];
      total = 0;
      document.getElementById("answer").value = "";
    } else if (buttonText === "CE") {
      // add Clear Entry functionality
      while (entries.length > 0) {
        var entry = entries.pop();
        if (!Number.isInteger(entry) && entry !== ".") {
          entries.push(entry);
          break;
        }
      }
    } else if (buttonText === "X") {
      // add multiplication operand conversion
      entries.push("*");
    } else if (buttonText === "÷") {
      // add division operand conversion
      entries.push("/");
    } else if (buttonText === "+") {
      entries.push("+");
    } else if (buttonText === "-") {
      entries.push("-");
    } else if (buttonText === ".") {
      entries.push(".");
    } else if (buttonText === "=") {
      
    } else if (buttonText === "%") {
      entries.push("%");
    }
  } else {
    // val is a number, add to answer text
    entries.push(val);
  }

  var newAnswer = "";

  for (let i = 0; i < entries.length; i++) {
     newAnswer += entries[i];

    var result = Number(entries[0]);
    var nextNum = Number(entries[i + 1]);
    // test the symbol against the stored number to perform the calculation
    // acknowledging that % and . do nothing for now
    if (buttonText === "+") {
      result += nextNum;
    } else if (buttonText === "-") {
      result -= nextNum;
    } else if (buttonText === "*") {
      result *= nextNum;
    } else if (buttonText === "/") {
      result /= nextNum;
    }
  }

  document.getElementById("answer").value = newAnswer;
}
//if the number is less than zero, turn result into an absolute number, and show that it's a negative number with '-'
if (result < 0) {
  result = Math.abs(result) + "-";
} else {
  // if any a number button is pushed after the calculation
  entries.push(val);
}

// push result to answer via val
document.getElementById("answer").value = result;
entries = [];
