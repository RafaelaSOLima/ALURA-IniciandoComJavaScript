let numeroSecreto = 38
let limite = 100

alert('Bem vindo ao jogo do número secreto');

let chute = prompt('Digite um numero de 0 a 100');

while(chute !== numeroSecreto){
    if(chute > limite){
        chute = prompt('Numero invalido! Tente novamente:');
    };
    if(chute > numeroSecreto){
        chute = prompt('Tente um numero menor:');
    };
    if(chute < numeroSecreto){
        chute = prompt('Tente um numero maior')
    };
}
