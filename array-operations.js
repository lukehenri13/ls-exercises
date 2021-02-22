/* 
Operações em Vetores

As linguagens de programação geralmente possui um tipo para tratar coleção de valores em uma única variável, 
em algumas vezes, nomeamos este tipo como vetor.
Quando obtemos um vetor é possível aplicar um conjunto de operações sobre esse valores, por exemplo, 
considerando um vetor com os valores (1, 2, 3), as operações de soma (sum), soma de números ímpares (sumOdds) e 
produtório (product) seria respectivamente 6, 4 e 6.

Para analisar mais exemplos veja a Tabela 1.

Tabela 1:
Operação            Entrada         Saída
sum	               (1, 2, 3)	    6
sum	               (2, 2, 2)	    6
sum	        (1, 2, 3, 4, 5, 6)      21
sumOdds	           (1, 2, 3)	    4
sumOdds	           (2, 2, 2)	    0
sumOdds	    (1, 2, 3, 4, 5, 6)	    9
product	           (1, 2, 3)	    6
product	           (2, 2, 2)	    8
product	    (1, 2, 3, 4, 5, 6)	    720
*/

const sum = function (arr) {
    return arr.reduce((result, number) => result + number, 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([2, 2, 2]));
console.log(sum([1, 2, 3, 4, 5, 6]));

/* Outras Maneiras: 
let sum = 0;
arr = [1,2,3];

1)
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

2)
for (const index in arr) {
    sum += arr[i];
}

3)
for (const result of arr) {
    sum += result;
} */


const sumOdds = function (arr) {
    return arr
    .filter((value) => value % 2 === 1)
    .reduce((result, number) => result + number, 0)
}
console.log(sumOdds([1, 2, 3]));
console.log(sumOdds([2, 2, 2]));
console.log(sumOdds([1, 2, 3, 4, 5, 6]));

/* Outra Maneira: 
let sumOdds = 0;
arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) { 
    sumOdds += arr[i]; }
}
*/

const product = function (arr) {
    return arr.reduce((result, number) => result * number, 1);
}
console.log(product([1, 2, 3]));
console.log(product([2, 2, 2]));
console.log(product([1, 2, 3, 4, 5, 6]));