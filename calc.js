window.onload = function() {
  //add event listeners for all buttons
  document.getElementById("1").addEventListener("click", calc);
  document.getElementById("2").addEventListener("click", calc);
  document.getElementById("3").addEventListener("click", calc);
  document.getElementById("4").addEventListener("click", calc);
  document.getElementById("5").addEventListener("click", calc);
  document.getElementById("6").addEventListener("click", calc);
  document.getElementById("7").addEventListener("click", calc);
  document.getElementById("8").addEventListener("click", calc);
  document.getElementById("9").addEventListener("click", calc);
  document.getElementById("0").addEventListener("click", calc);
  document.getElementById("AC").addEventListener("click", calc);
  document.getElementById("CE").addEventListener("click", calc);
  document.getElementById("percent").addEventListener("click", calc);
  document.getElementById("divide").addEventListener("click", calc);
  document.getElementById("x").addEventListener("click", calc);
  document.getElementById("-").addEventListener("click", calc);
  document.getElementById("=").addEventListener("click", calc);
  document.getElementById(".").addEventListener("click", calc);
};
var entries = [];
var total = 0;
var temp = "";

function calc(event) {
  //we will need to push all innerText to val
  console.log(this.innerText);
  //  document.getElementById("answer").value = this.innerText;

  // add buttons functionality

  var val = parseFloat(this.innerText);

  if ((val.innerText = !NaN || ".")) {
    temp += val;
    document.getElementById("answer").value = temp;

    // add All Clear functionality
  } else if (val === "AC") {
    entries = [];
    temp = "";
    total = 0;
    document.getElementById("answer").val("");
  } else if (val === "CE") {
    // add Clear Entry functionality
    temp = "";
    document.getElementById("answer").val("");
  } else if (val === "x") {
    // add multiplication operand conversion
    entries.push(temp);
    entries.push("*");
    temp = [];
  } else if (val === "÷") {
    // add division operand conversion
    entries.push(temp);
    entries.push("/");
    temp = [];
  }
  // set the result of the calculation
  var result = Number(entries[0]);
  for (let i = 0; i <= entries.length; i++) {
    var nextNum = Number(entries[i + 1]);
    var symbol = entries[i];

    // test the symbol against the stored number to perform the calculation
    if (symbol === "+") {
      result += nextNum;
    } else if (symbol === "-") {
      result -= nextNum;
    } else if (symbol === "*") {
      result *= nextNum;
    } else if (symbol === "/") {
      result /= nextNum;
    }

    i++;
  }
}

//if the number is less than zero, turn result into an absolute number, and show that it's a negative number with '-'
if (result < 0) {
  result = Math.abs(result) + "-";
} else {
  // if any a number button is pushed after the calculation
  entries.push(temp);
  entries.push(val);
  temp = "";
}
// push result to answer via val
getElementById(answer).push(val(result));
entries = [];
temp = "";
