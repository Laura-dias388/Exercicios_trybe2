/*1- Crie uma nova função para calcular a área de um losango.
 A área do losango é dada pelo resultado da multiplicação 
 da diagonal maior (D) pela diagonal menor (d) dividido 
 por dois. A = (D * d) / 2 */

export function calculateTheAreaOfTheLozenge(D: number, d: number): number {
  return (D * d) / 2;
}

/*2- Crie uma nova função para calcular a área de um trapézio.
 A área do trapézio é dada pelo produto da altura (h)
  com a soma da base maior (B) e a base menor (b) 
  dividido por dois. A = [(B + b) * h] / 2
 */

export function calculateTheAreaOfTheTrapézio(h: number, B: number, b:number): number { 
  return ((B + b) * h) / 2;
}

/* Crie uma nova função para calcular a área de um círculo.
 A área do círculo de raio r é calculada multiplicando 
 o raio ao quadrado pelo número irracional ℼ 
 (em geral utilizamos ℼ = 3,14). A = ℼ * r². Dica:
você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI. */

export function calculateTheAreaOfTheCírculo(r: number) {
  return Math.PI * r ** 2 ;
}