// Function to find elements at even positions in an array
function elementsAtEvenPositions(arr: string[]): void {
    const evenPositionElements = arr.filter((_, index) => index % 2 === 0);
    console.log(evenPositionElements.join(' '));
}

// Example usage:
elementsAtEvenPositions(["apple", "banana", "cherry", "date", "elderberry", "fig"]); // Output: apple cherry elderberry
elementsAtEvenPositions(['20', '30', '40', '50', '60']); // Output: 20 40 60
elementsAtEvenPositions(['5', '10']); // Output: 5
