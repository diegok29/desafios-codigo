function inverterString(s) {
    let invertida = '';
    for (let char of s) {
        invertida = char + invertida;
    }
    return invertida;
}

// Teste
let string = prompt("Digite uma string:");
console.log(`String invertida: ${inverterString(string)}`);
