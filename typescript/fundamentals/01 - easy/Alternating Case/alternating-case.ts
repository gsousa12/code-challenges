/*
Define String.prototype.toAlternatingCase (or a similar function/method 
such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
see the initial solution for details) such that each lowercase letter becomes uppercase and 
each uppercase letter becomes lowercase. For example:

toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

*/

const changeCase = (char: string): string => {
  if (char === null || char === "") return "";
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
};

export const toAlternatingCase = (phase: string): string => {
  return phase
    .split("")
    .map((char) => changeCase(char))
    .join("");
};

//console.log(toAlternatingCase("altERnaTIng cAsE "));
