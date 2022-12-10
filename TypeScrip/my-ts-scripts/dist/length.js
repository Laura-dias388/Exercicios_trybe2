"use strict";
/* Exercício 1
Temos um array characters que agrupa dados de jogadores em um MMORPG
 (“Jogo de representação de papéis online, multijogador em massa”)
 usado para manter o registro de uma guilda (grupo de jogadores) no
 acompanhamento da evolução do grupo. Esses dados foram adicionados
 sem se atentar para sua correta tipagem, o que pode ocasionar um bug
  no futuro. Faça a correta tipagem do array por meio do tipo Character
  e da função usada para imprimir as informações básicas de todos os jogadores. */
const converts = [
    {
        nome: 'Quilômetro',
        valor: 1000,
        simbolo: 'km',
    },
    {
        nome: 'Hectômetro',
        valor: 100,
        simbolo: 'hm',
    },
    {
        nome: 'Decâmetro',
        valor: 10,
        simbolo: 'dam',
    },
    {
        nome: 'Metro',
        valor: 1,
        simbolo: 'm',
    },
    {
        nome: 'Decímetro',
        valor: 0.1,
        simbolo: 'dm',
    },
    {
        nome: 'Centímetro',
        valor: 0.01,
        simbolo: 'cm',
    },
    {
        nome: 'Milímetro',
        valor: 0.001,
        simbolo: 'mm',
    },
];
function measurementConversion(converts, index) {
    const { nome, valor, simbolo } = converts;
    console.log(`\n\n===== Coversion: ${index + 1} ========`);
    console.log(`name: ${nome} value: ${valor} simbolo: ${simbolo}`);
}
converts.forEach(measurementConversion);
