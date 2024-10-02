function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

const x: number = 6;
const y: number = 8;

const area: number = calculateRectangleArea(x, y);

console.log(`The area of rectangle is ${area}`);

