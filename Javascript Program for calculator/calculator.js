function calculate(a, b, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        console.log("Error: Invalid operator!");
        result = 0;
    }
  
    return result;
  }
  
  function main() {
    let testCases = parseInt(prompt("Enter the number of test cases: "));
  
    for (let i = 0; i < testCases; i++) {
      let a = parseFloat(prompt("Enter num1 for test case " + (i + 1) + ": "));
      let op = prompt("Enter the operator for test case " + (i + 1) + ": ");
      let b = parseFloat(prompt("Enter num2 for test case " + (i + 1) + ": "));
  
      // Calculate result
      const result = calculate(a, b, op);
      alert("Result for test case " + (i + 1) + ": " + result.toFixed(3));
    }
  }
  
  main();
  