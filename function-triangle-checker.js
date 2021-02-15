/* 
O triângulo é uma figura que possui três lados, e dependendo dos valores dos lados sua classificação 
pode ser equilátero, isósceles e escaleno dependendo se a quantidade de lados iguais forem 
respectivamente três, dois e nenhum.

Então, se os lados forem 2, 2, 2 o triângulo será equilateral. 
Contudo, nem toda junção de três tamanhos formam um triângulo válido, por exemplo, 
os lados 0, 0, 0. Para analisar mais exemplos veja a Tabela 1.

Tabela 1:

Entrada                 Saída
2, 2, 2                 equilateral
10, 10, 10              equilateral
3, 4, 4                 isosceles
4, 3, 4                 isosceles
4, 4, 3                 isosceles
10, 10, 2               isosceles
3, 4, 5                 scalene
10, 11, 12              scalene
5, 4, 2                 scalene
0, 0, 0                 none
3, 4, -5                none
1, 1, 3                 none
2, 4, 2                 none
*/

function triangleChecker (a,b,c) {
    if ((a+b)> c && (a+c)> b && (b+c)> a) {
    while (a>0 && b>0 && c>0) {
        if (a == b && a == c) {
            return "Equilateral Triangle";
        }
        else if (a == b || a == c || b == c) {
            return "Isosceles Triangle";
        }
        else {
            return "Scalene Triangle";
        }
    }
    }
    return 'Not a Triangle'
}

console.log(triangleChecker(2,2,2)); //=> Equilateral 
console.log(triangleChecker(10,10,10)); //=> Equilateral

console.log(triangleChecker(4,3,4)); //=> Isosceles 
console.log(triangleChecker(3,4,4)); //=> Isosceles
console.log(triangleChecker(4,4,3)); //=> Isosceles

console.log(triangleChecker(3,4,5)); //=> Scalene 
console.log(triangleChecker(10, 11, 12)); //=> Scalene


console.log(triangleChecker(0,0,0)); //=> N.aT.
console.log(triangleChecker(3,4,-5)); //=> N.aT.

//Condição de Existência (Lados)
console.log(triangleChecker(2,4,2)); //=> N.aT.
console.log(triangleChecker(1,1,3)); //=> N.aT. 