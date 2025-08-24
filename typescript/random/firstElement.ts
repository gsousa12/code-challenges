/*
Implemente uma função genérica called first que recebe um array de T 
e retorna o primeiro elemento ou undefined caso o array esteja vazio.
 A função deve preservar o tipo do elemento retornado.

Exemplo de uso esperado:
const n = first([10, 20]); // n: number | undefined
const s = first(['a', 'b']); // s: string | undefined

Entregue o código em TypeScript.
*/

export function first<T>(arr: readonly T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

console.log(first([]));
console.log(first(["a", "b"]));
