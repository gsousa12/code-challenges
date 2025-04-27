/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

* "String" -> "SSttrriinngg"

* "Hello World" -> "HHeelllloo WWoorrlldd"

* "1234!_ " -> "11223344!!__ "
*/
/**
 *
 * @param phase
 * @returns Frase com os caracteres duplicados (case sensitive)
 */

export const doubleChar = (phase: string): any =>
  phase
    .split("")
    .map((char) => char + char)
    .join("");

// Teste
//console.log(doubleChar("Txs _ @"));
