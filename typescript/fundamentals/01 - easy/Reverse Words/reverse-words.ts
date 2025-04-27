/*

Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"double  spaces!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

/**
 *
 * @param phase
 * @returns
 */

const reverseWords = (phase: string): string => {
  return phase
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords(" double       spaces! and ¨& Tessst"));
