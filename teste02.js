// Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
function checkWord(word) {
    const counter = (word.toLowerCase().match(/a/g) || []).length;

    if (counter > 0) {
        console.log(`A letra 'a' ocorre ${counter} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

checkWord("abacaxi");
