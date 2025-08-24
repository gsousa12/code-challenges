/*
Implemente uma função assertNever(x: never): never que lança um erro. 
Use-a para garantir exaustividade em um switch sobre um discriminated union.

Exemplo:
type Shape =
| { kind: 'circle'; radius: number }
| { kind: 'square'; size: number };

Implemente a função area(s: Shape): number que calcula a área e usa assertNever no default.

Entregue o código em TypeScript.
*/

export function assertNever(x: never): never {
  throw new Error("Unexpected case in exhaustive check");
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

export function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.size ** 2;
    default:
      return assertNever(s);
  }
}
