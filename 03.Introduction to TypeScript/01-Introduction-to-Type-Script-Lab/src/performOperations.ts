function performOperations(arr: number[]): void {
    // 1. Sum(ai) - Sum of all elements
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    
    // 2. Sum(1/ai) - Sum of the inverses of all elements
    const inverseSum = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    
    // 3. Concat(ai) - Concatenation of string representations of all elements
    const concat = arr.reduce((acc, curr) => acc + curr.toString(), '');

    // Print the results
    console.log(sum);          // Sum(ai)
    console.log(inverseSum);   // Sum(1/ai)
    console.log(concat);       // Concat(ai)
}

// Example usage:
performOperations([1, 2, 3]);
// Output:
// 6
// 1.8333333333333333
// 123

performOperations([2, 4, 8, 16]);
// Output:
// 30
// 0.9375
// 24816
