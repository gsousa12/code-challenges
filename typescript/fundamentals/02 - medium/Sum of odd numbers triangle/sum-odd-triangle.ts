/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

/* Versão O(1) - constante*/
const sumOfOddNumbersTriangle = (row: number): number => {
  return Math.pow(row, 3);
};

/* Versão O(n)*/
const sumOfOddNumbersTriangle2 = (row: number): number => {
  const fistNumber = row * row - row + 1;
  let result = 0;

  for (let i = 0; i < row; i++) {
    result = result + fistNumber + 2 * i;
  }

  return result;
};

/* Versão psico */
const sumOfOddNumbersTriangle3 = (row: number): number => {
  return Array.from(
    { length: row },
    (_, i) => row * (row - 1) + 1 + i * 2
  ).reduce((acc, cur) => acc + cur);
};

//console.log(sumOfOddNumbersTriangle(3));
//console.log(sumOfOddNumbersTriangle2(8));
//console.log(sumOfOddNumbersTriangle3(3));
