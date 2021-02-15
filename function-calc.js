/* 
Monte uma calculadora por meio de dois valores numéricos e um operador aritmético.

Operação	Operadores
soma	        +
subtração	    -
multiplicação	*
divisão	        /

Então, se os números forem 1 e 1, e o operador for +, o resultado será 2.
 */


function calc (n1, n2, op) {
    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return "Invalid Operator";
    }
}

console.log(calc(1,1,'+'));
console.log(calc(1,1,'-'));
console.log(calc(1,1,'*'));
console.log(calc(1,1,'/'));