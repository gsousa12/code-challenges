/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

*/

/**
 * @param {string[]} needleArray
 */

export const findNeedle = (needleArray: string[]): string => {
  const index = needleArray.indexOf("needle");
  if (index !== -1) return `Found the needle at position ${index}`;

  return "Needle not exist in given array";
};
