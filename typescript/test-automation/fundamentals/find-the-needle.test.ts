import { findNeedle } from "../../fundamentals/01 - easy/A Needle in the Haystack/find-the-needle";

const generateNeedleArray = (n: number): string[] => {
  const array: string[] = Array(n).fill("junk");
  if (n > 0) {
    const randomIndex = Math.floor(Math.random() * n);
    array[randomIndex] = "needle";
  }
  return array;
};

// test
// const arraySize = 32;
// const needleArray = generateNeedleArray(arraySize);
// console.log("Array 1:", needleArray);
// console.log(findNeedle(needleArray));
