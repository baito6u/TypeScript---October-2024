// Function to sort the array and return the second half
function biggerHalf(arr: number[]): number[] {
  // Step 1: Sort the array in ascending order
  const sortedArr = arr.sort((a, b) => a - b);

  // Step 2: Find the start index for the second half
  const startIndex = Math.floor(arr.length / 2);

  // Step 3: Return the second half of the sorted array
  return sortedArr.slice(startIndex);
}

// Example usage:
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6])); // Output: [7, 14, 19, 19]
console.log(biggerHalf([1, 2, 3, 4])); // Output: [3, 4]
console.log(biggerHalf([7, 1, 3, 5, 2])); // Output: [5, 7]
console.log(biggerHalf([4, 7, 2, 5])); // Output: [5, 7]
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6])); // Output: [7, 14, 19, 19]
