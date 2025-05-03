/* 

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

const playingBajo = (name: string): string => {
  if (!name) return "";
  return name.toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
};

// console.log(playingBajo("Theo"));
// console.log(playingBajo("Raul"));
// console.log(playingBajo("ricardo"));
