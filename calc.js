var entries = [];
var total = 0;
var temp = "";

// add buttons functionality
document
  .getElementById("button")("button")
  .on("click", function() {
    var val = document
      .getElementById("button")(this)
      .text();
    if ((val = !NaN || ".")) {
      temp += val;
      document.getElementById("answer").val(temp.substring(0, 10));

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
        var nextNum = Number(entries[i+1]);
        var symbol = entries[i];
       
        // test the symbol against the stored number to perform the calculation
        if (symbol === '+') { 
            result += nextNum
        } else if (symbol === '-') {
            result -= nextNum
        } else if (symbol === '*') {
            result *= nextNum
        } else if (symbol === '/') {
            result /= nextNum
        }
        
        //if the number is less than zero, turn result into an absolute number, and show that it's a negative number with '-'

        if (result < 0) {
            result = Math.abs(result) + '-';
        }
        

        i++;
    }
  });
