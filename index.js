// Class
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

// Switch Statement
function getDayOfWeek(dayIndex) {
  switch (dayIndex) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}

// Try-Catch-Finally
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    return `Error: ${error.message}`;
  } finally {
    console.log("Division operation completed.");
  }
}

document.getElementById("addButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const calculator = new Calculator();
  const result = calculator.add(num1, num2);
  document.getElementById("result").textContent = `Result: ${result}`;
});

document.getElementById("subtractButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const calculator = new Calculator();
  const result = calculator.subtract(num1, num2);
  document.getElementById("result").textContent = `Result: ${result}`;
});

document.getElementById("getDayButton").addEventListener("click", () => {
  const dayIndex = parseInt(document.getElementById("dayIndex").value);
  const dayOfWeek = getDayOfWeek(dayIndex);
  document.getElementById("dayResult").textContent = `Day: ${dayOfWeek}`;
});

document.getElementById("divideButton").addEventListener("click", () => {
  const dividend = parseFloat(document.getElementById("dividend").value);
  const divisor = parseFloat(document.getElementById("divisor").value);
  const divisionResult = divide(dividend, divisor);
  document.getElementById(
    "divisionResult"
  ).textContent = `Result: ${divisionResult}`;
});
