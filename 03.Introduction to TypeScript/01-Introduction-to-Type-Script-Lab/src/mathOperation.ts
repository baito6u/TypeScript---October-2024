function mathOperation(num1: number, num2: number, operator: string): void {
  let result: number;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;

    default:
      console.log("Error: Invalid operator");
      return;
  }
  console.log(result);
}

mathOperation(5, 3, '+');  // Output: 8
mathOperation(5, 3, '-');  // Output: 2
mathOperation(5, 3, '*');  // Output: 15
mathOperation(5, 3, '/');  // Output: 1.6666...
mathOperation(5, 3, '%');  // Output: 2
mathOperation(5, 3, '**'); // Output: 125
