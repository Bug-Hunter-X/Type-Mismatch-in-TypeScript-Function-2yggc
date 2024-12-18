function add(a: number, b: number | string): number {
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numB)) {
    throw new Error('Invalid input: b must be a number or a parsable string');
  }
  return a + numB;
}

const result1 = add(5, 10); // Correct usage
const result2 = add(5, '10'); // Correct usage with string conversion
const result3 = add(5, 'hello'); // Throws an error