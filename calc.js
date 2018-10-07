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

      // add Clear Entry functionality
    } else if (val === "CE") {
      temp = "";
      document.getElementById("answer").val("");
    }
  });
