type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

type Bird = {
  name: string;
  place: string;
};

// Crie um type para um objeto que represente um pássaro.

function printBird(bird: Bird) {
  console.log("O pássaro " + bird.name + " é originário da região " + bird.place);
}

printBird({ name: "Pardal", place: "Sul" });

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.

type Soma = {
  a: number;
  b: number;
}

function soma(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

soma(1, 2);

// Crie um type para um objeto que represente um endereço.

type Endereco = {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
}

function printEndereco(endereco: Endereco) {
  console.log(`Endereço: Rua:${endereco.rua}, Número:${endereco
  .numero}, Bairro:${endereco.bairro}, Cidade:${endereco.cidade}, Estado:${endereco.estado}, País:${endereco.pais}`);
}

printEndereco({ rua: "NeverLand", numero: 1000, 
bairro: "bonzai", cidade: "SmallVille", estado: "And", pais: "País das Maravilhas" });

// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

type EstadoFisico = 'líquido' | 'sólido' | 'gasoso';

function printEstadoFisico(estado: EstadoFisico) {
  console.log(`O estado da matéria é: ${estado}`);
}

printEstadoFisico('líquido');

//Crie um type union que represente o documento identificador de 
// uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type Documento = number | string;

function printDocumento(documento: Documento) {
  console.log(`O numero do documento é: ${documento}`);
}

printDocumento('123.567.890-12');
printDocumento(123456789012);

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type SistemaOperacional = 'linux' | 'mac os' | 'windows';

function printSistemaOperacional(sistema: SistemaOperacional) {

  console.log(`O sistema operacional é: ${sistema}`);
}

printSistemaOperacional('linux');
printSistemaOperacional('mac os');
printSistemaOperacional('windows');

// Crie um type union que represente as vogais do alfabeto.

type Vogais = 'a' | 'e' | 'i' | 'o' | 'u';

function printVogais(vogal: Vogais) {

  console.log(`A vogal é: ${vogal}`);
}

printVogais('a');
printVogais('e');
printVogais('i');
printVogais('o');
printVogais('u');

// Crie um type union que represente os números pares.

type NumerosPares = 2 | 4 | 6 | 8 | 10;

function printNumerosPares(numero: NumerosPares) {
  
    console.log(`O número é: ${numero}`);
  }

printNumerosPares(2);
printNumerosPares(4);
printNumerosPares(6);
printNumerosPares(8);
printNumerosPares(10);


