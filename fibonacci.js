function isFibonacci(n) {
    if (n === 0 || n === 1) {
        return true;
    }

    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }

    return b === n;
}

// Teste
let numero = prompt("Digite um número:");
numero = parseInt(numero, 10);

if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
