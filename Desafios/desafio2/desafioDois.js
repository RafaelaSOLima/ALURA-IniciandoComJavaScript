// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Que dia é hoje?");
if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    alert("Bom fim de semana!")
}else{
    alert("Boa semana!")
};

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um numero positivo ou negativo:");

if(numero<0){
    alert(`Seu numero: ${numero} é negativo`)
}
else if(numero>0){
    alert(`Seu numero: ${numero} é positivo`)
}else{
    alert(`Isso: ${numero}, não é um numero!`)
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontosMinimos = 100;
let pontos = 10; 

if(pontos >= pontosMinimos){
    alert("Parabéns, você venceu!");
}else {
    alert("Tente novamente para ganhar.");
};


// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1139.99 ;

alert(`Seu saldo é de R$:${saldo}`)

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Digite seu nome:")

alert(`Boas vindas a você ${nome}!`)