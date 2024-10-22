function calculate(num1: number, operator: string, num2: number): void {
    let result: number;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.error("Error: Division by zero");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.error("Error: Invalid operator");
            return;
    }

    console.log(result.toFixed(2)); 
}

// Examples
calculate(5, "+", 10);    // Output: 15.00
calculate(25.5, "-", 3);  // Output: 22.50
calculate(9, "/", 2);     // Output: 4.50
calculate(7, "*", 5);     // Output: 35.00
