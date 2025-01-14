const faturamentoEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
const percentuais = Object.fromEntries(
    Object.entries(faturamentoEstados).map(([estado, valor]) => [estado, (valor / faturamentoTotal) * 100])
);

Object.entries(percentuais).forEach(([estado, percentual]) => {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
