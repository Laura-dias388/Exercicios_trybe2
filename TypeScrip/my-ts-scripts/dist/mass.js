"use strict";
/* Exercício 3
Crie um script para converter unidades de medida de massa
 Esse script deverá se chamar mass.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string */
const convertsForMass = [
    {
        nome: 'Quilograma',
        valor: 1000,
        simbolo: 'kg',
    },
    {
        nome: 'Hectograma',
        valor: 100,
        simbolo: 'hg',
    },
    {
        nome: 'Decagrama',
        valor: 10,
        simbolo: 'dag',
    },
    {
        nome: 'Grama',
        valor: 1,
        simbolo: 'g',
    },
    {
        nome: 'Decigrama',
        valor: 0.1,
        simbolo: 'dg',
    },
    {
        nome: 'Centigrama',
        valor: 0.01,
        simbolo: 'cg',
    },
    {
        nome: 'Miligrama',
        valor: 0.001,
        simbolo: 'mg',
    },
];
function massConversation(convertsForMass, index) {
    const { nome, valor, simbolo } = convertsForMass;
    console.log(`\n\n===== Coversion: ${index + 1} ========`);
    console.log(`name: ${nome} value: ${valor} simbolo: ${simbolo}`);
}
convertsForMass.forEach(massConversation);
