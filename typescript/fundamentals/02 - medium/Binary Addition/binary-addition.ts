/*

Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

// Fácil
const binaryAddition = (n1: number, n2: number): string => {
  const sum = n1 + n2;
  return sum.toString(2);
};

// Médio
const binaryAddition2 = (n1: number, n2: number): string => {
  let bin = "";
  let sum = n1 + n2;
  while (sum > 0) {
    const rest = sum % 2;
    bin = rest + bin;
    sum = Math.floor(sum / 2);
  }

  return bin;
};

console.log(binaryAddition(5, 9));
console.log(binaryAddition2(5, 9));
