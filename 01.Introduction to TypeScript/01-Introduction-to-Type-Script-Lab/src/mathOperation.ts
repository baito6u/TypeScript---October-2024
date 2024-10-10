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

mathOperation(5, 6, '+');  // Output: 11
mathOperation(5, 3, '-');  // Output: 2
mathOperation(3, 5.5, '*');  // Output: 16.5
mathOperation(5, 3, '/');  // Output: 1.6666...
mathOperation(5, 3, '%');  // Output: 2
mathOperation(5, 3, '**'); // Output: 125
