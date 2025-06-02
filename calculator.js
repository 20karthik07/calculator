function ac() {
  document.getElementById("res").value = "";
}

function show(input) {
  document.getElementById("res").value += input;
}

function calc() {
  var output = document.getElementById("res").value;
  try {
    document.getElementById("res").value = eval(output);
  } catch (e) {
    document.getElementById("res").value = "Error";
  }
}
