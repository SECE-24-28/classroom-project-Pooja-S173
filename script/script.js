function calculate() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let op = document.getElementById("op").value;

  if (op == "+") {
    console.log("Result =", a + b);
  }
  else if (op == "-") {
    console.log("Result =", a - b);
  }
  else if (op == "*") {
    console.log("Result =", a * b);
  }
  else if (op == "/") {
    console.log("Result =", a / b);
  }
  else {
    console.log("Invalid Operator");
  }
}




