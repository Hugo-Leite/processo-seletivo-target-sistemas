/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function numberBelongsToFibonacci(numberProvided) {
    if (numberProvided < 0) {
        return false;
    }

    // inicia a sequencia de fibonacci
    let numberA = 0;
    let numberB = 1;

    // gera a sequencia de fibonacci até encotrar um número maior ou igual ao número escolhido
    while (numberA <= numberProvided) {
        if (numberA === numberProvided) {
            return true;
        }

        let sum = numberA + numberB;
        numberA = numberB;
        numberB = sum;
    }

    return false;
}

const numberToCheck = 1000;

if (numberBelongsToFibonacci(numberToCheck)) {
    console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numberToCheck} não pertence à sequência de Fibonacci.`);
}
