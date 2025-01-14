// Suponha que os dados estejam em um arquivo JSON chamado 'faturamento.json'
const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dados = JSON.parse(data);
    
    const faturamento = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

    const menor_valor = Math.min(...faturamento);
    const maior_valor = Math.max(...faturamento);
    const media_mensal = faturamento.reduce((acc, val) => acc + val, 0) / faturamento.length;
    const dias_acima_da_media = faturamento.filter(valor => valor > media_mensal).length;

    console.log(`Menor valor de faturamento: ${menor_valor}`);
    console.log(`Maior valor de faturamento: ${maior_valor}`);
    console.log(`Dias com faturamento acima da média: ${dias_acima_da_media}`);
});
