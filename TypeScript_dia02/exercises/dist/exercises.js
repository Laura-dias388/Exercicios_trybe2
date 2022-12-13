"use strict";
function printCoord(pt) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });
// Crie um type para um objeto que represente um pássaro.
function printBird(bird) {
    console.log("O pássaro " + bird.name + " é originário da região " + bird.place);
}
printBird({ name: "Pardal", place: "Sul" });
function soma(a, b) {
    console.log(a + b);
    return a + b;
}
soma(1, 2);
function printEndereco(endereco) {
    console.log(`Endereço: Rua:${endereco.rua}, Número:${endereco
        .numero}, Bairro:${endereco.bairro}, Cidade:${endereco.cidade}, Estado:${endereco.estado}, País:${endereco.pais}`);
}
printEndereco({ rua: "NeverLand", numero: 1000,
    bairro: "bonzai", cidade: "SmallVille", estado: "And", pais: "País das Maravilhas" });
// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf) {
    console.log("Seu CPF é: " + cpf);
}
imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
function printEstadoFisico(estado) {
    console.log(`O estado da matéria é: ${estado}`);
}
printEstadoFisico('líquido');
function printDocumento(documento) {
    console.log(`O numero do documento é: ${documento}`);
}
printDocumento('123.567.890-12');
printDocumento(123456789012);
function printSistemaOperacional(sistema) {
    console.log(`O sistema operacional é: ${sistema}`);
}
printSistemaOperacional('linux');
printSistemaOperacional('mac os');
printSistemaOperacional('windows');
function printVogais(vogal) {
    console.log(`A vogal é: ${vogal}`);
}
printVogais('a');
printVogais('e');
printVogais('i');
printVogais('o');
printVogais('u');
function printNumerosPares(numero) {
    console.log(`O número é: ${numero}`);
}
printNumerosPares(2);
printNumerosPares(4);
printNumerosPares(6);
printNumerosPares(8);
printNumerosPares(10);
