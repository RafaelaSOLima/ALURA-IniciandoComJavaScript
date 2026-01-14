// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let num = 0;

console.log("Contagem progressiva");
while(num<11){
    console.log(num);
    num++
};

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
console.log("Contagem regressiva");
while(num>0){
    num--
    console.log(num);
};

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
num = prompt("Me diga um numero maior que 0 para contarmos regressivamente no console:");
console.log(`Contagem regressiva a partir do número ${num}:`);
while(num>-1){
    console.log(num);
    num--
    4
};

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
num = prompt("Me diga um numero para contarmos progressivamente no console:");
let numInicial = -1;
console.log(`Contagem progressiva de 0 até o número ${num}:`);
while(num>numInicial){
    numInicial++
    console.log(numInicial);
    
};