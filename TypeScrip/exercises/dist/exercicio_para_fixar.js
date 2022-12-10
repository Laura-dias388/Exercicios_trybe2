"use strict";
/*1- Crie uma nova função para calcular a área de um losango.
 A área do losango é dada pelo resultado da multiplicação
 da diagonal maior (D) pela diagonal menor (d) dividido
 por dois. A = (D * d) / 2 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTheAreaOfTheCírculo = exports.calculateTheAreaOfTheTrapézio = exports.calculateTheAreaOfTheLozenge = void 0;
function calculateTheAreaOfTheLozenge(D, d) {
    return (D * d) / 2;
}
exports.calculateTheAreaOfTheLozenge = calculateTheAreaOfTheLozenge;
/*2- Crie uma nova função para calcular a área de um trapézio.
 A área do trapézio é dada pelo produto da altura (h)
  com a soma da base maior (B) e a base menor (b)
  dividido por dois. A = [(B + b) * h] / 2
 */
function calculateTheAreaOfTheTrapézio(h, B, b) {
    return ((B + b) * h) / 2;
}
exports.calculateTheAreaOfTheTrapézio = calculateTheAreaOfTheTrapézio;
/* Crie uma nova função para calcular a área de um círculo.
 A área do círculo de raio r é calculada multiplicando
 o raio ao quadrado pelo número irracional ℼ
 (em geral utilizamos ℼ = 3,14). A = ℼ * r². Dica:
você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI. */
function calculateTheAreaOfTheCírculo(r) {
    return Math.PI * r ** 2;
}
exports.calculateTheAreaOfTheCírculo = calculateTheAreaOfTheCírculo;
