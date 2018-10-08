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
var temp = "";

function calc(event) {
  var buttonText = this.innerText;
  var val = parseFloat(buttonText);

  if (isNaN(val)) {
    // test all non-number buttons
    if (buttonText === "AC") {
      // add All Clear functionality
          entries = [];
      temp = "";
      total = 0;
      
      document.getElementById("answer").value = temp;
    } else if (buttonText === "CE") {
      // add Clear Entry functionality
       temp = "";
      document.getElementById("answer").value = temp;
    } else if (buttonText === "X") {
      // add multiplication operand conversion
      entries.push(temp);
      entries.push("*");
      temp = "";
    } else if (buttonText === "÷") {
      // add division operand conversion
      entries.push(temp);
      entries.push("/");
      temp = "";
    } else if (buttonText === "+") {
      entries.push(temp);
      entries.push("+");
      temp = "";
    } else if (buttonText === ".") {
      entries.push(temp);
      entries.push(".");
      temp = "";
    } else if (buttonText === "=") {
      entries.push(temp);
      entries.push("=");
      temp = "";
    } else if (buttonText === "%") {
      entries.push(temp);
      entries.push("%");
      temp = "";
    }
  } else {
    // val is a number, add to answer text
    temp += val;
    document.getElementById("answer").value = temp;
  }

  // I will need to push the NaN buttonText to symbol
  // I will need to walk through what is happening in these functions to see if the appropriate tests are being run correctly

  
  // set the result of the calculation
  var result = Number(entries[0]);
  for (let i = 0; i <= entries.length; i++) {
    var nextNum = Number(entries[i + 1]);

    // test the symbol against the stored number to perform the calculation
    // need to add other NaN buttons: . %
    if (buttonText === "+") {
      result += nextNum;
    } else if (buttonText === "-") {
      result -= nextNum;
    } else if (buttonText === "*") {
      result *= nextNum;
    } else if (buttonText === "/") {
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

