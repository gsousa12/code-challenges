/*
Array.from()

Cria um novo array a partir de um objeto que não é um array, 
mas que se parece com um array (como um NodeList retornado do DOM) 
ou que é iterável (como uma string ou um Set). Ele também pode aplicar 
uma função de mapeamento a cada elemento durante a criação do novo array.
*/

const t1 = Array.from("Teste");
//console.log(t1); // [ 'T', 'e', 's', 't', 'e' ]

const t2 = Array.from([2, 4, 6], (e) => e * 2);
//console.log(t2);

const ex_1 = Array.from({ length: 2 }, (_, i) => 2 * (2 - i));
//console.log(ex_1);
