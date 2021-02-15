const x = 8;
soma = x + 2;
potencia = x**2;
rcub = x ** (1/3);  //potência com expoente fracionário = raiz quadrada, cúbica..
exp2gr = 3*(x**2)+(12*x)-4;
maiq = x+3 > x**(1/2);


console.log('Resultado:', soma)
console.log('Resultado:', potencia)
console.log('Resultado:', rcub)
console.log('Resultado:', exp2gr)
console.log('Resultado:', maiq)

//spread operator
const numbers = [1, 2, 3];
console.log(...numbers, 4, 5); //=> [1, 2, 3, 4, 5]
        //pq ... antes do numbers? (oculta os colchetes no terminal) = OPERADOR SPREAD (chama os elementos do array NUMBERS) */


//prefix decrement
let number = 10;
console.log(--number); //=> 9       
        // OPERADOR DE DECREMENTO (-1): PODE SER '--NUMBER' OU 'NUMBER--'


//delete operator
const numbers = [1, 2, 3];
delete numbers[1];
console.log(numbers); //=> [ 1, <empty item> , 3 ]          
        // OPERADOR DELETE (deleta numa posição do array e deixa o espaço em vazio)

// left shift operator
console.log((127 & 0xff) << 24) | ((0 & 0xff) << 16) | ((0 & 0xff) << 8) | (1 & 0xff); //=> 2130706433
        // desloca bits para a esquerda, o cálculo que << faz é x * (2**y) "a=9, b=3, a<<b = 9 * (2 ** 3) = 9 * (8) = 72" 
        // o resultado desses operadores de deslocamento de bit é em número padrão javascript
        // prefixo 0x especifica que o que vem a seguir é um número em hexadecimal "0xff"
        // outros operadores na expressão: & = AND (E = compara os bits do numero com a lógica do "e") - resultado em decimal
        // | = OR (OU = compara os bits dos números com a lógica do "ou") - resultado em decimal


// sign-propagating right shift operator
console.log((2130706433 >>> 24) & 0xff); //=> 127
console.log((2130706433 >>> 16) & 0xff); //=> 0
console.log((2130706433 >>> 8) & 0xff); //=> 0
console.log(2130706433 & 0xff); //=> 1
        // a >>> b = pega o primeiro numero em binário e tira a quantidade de bits (que é o segundo número) da direita pra esquerda 
        // e o resultado sai em decimal


// unary plus operator
const number = '15';
console.log(+number); //=>  15
        // OPERADORES UNÁRIOS: +x = converte em um número positivo (funciona com true, false, números em uma string)
        // -x = converte em um número negativo (negação do +x)

// less than and greater than operator
const number = 1;
console.log(10 > number < 20); //=> true
        // > : maior que, < : menor que
        // número entre um intervalo, comparativo: x > número < y


// equality operator
console.log(1 == "1a"); //=> false
console.log(1 == "1"); //=> true
        // Igualdade: pode ser de tipos diferentes, o conteúdo precisa ser o mesmo para dar true

// identity/strict equality
console.log(1 === "1"); //=> false
        // Identidade: só será true se o tipo e o valor forem estritamente idênticos


// bitwise and operator
console.log((8 & 1) === 0); //=> true
console.log(!(8 & 1)); //=> true
console.log(!!(8 & 1)); //=> false
        // ! = Negação de um valor/condição
        // !! = Explicitar o valor primitivo (!!true = truthy (true) - negação da negação // !!false = falsy)
 
// logical or operator
let x;
const y = 15;
console.log(y || x);
        // || = OU lógico (comparação de condições/expressões usando a lógica do OU, é diferente do | que é usado para comparar bits dos números)
        // && = E lógico 