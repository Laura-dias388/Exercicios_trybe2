// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age: number;
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa

  /* constructor é um método especial para criar e inicializar um objeto criado a partir 
  de uma classe (classe é um tipo de função, mas não é uma função em si) e sempre será 
  chamado quando um objeto for criado a partir de uma classe */
  constructor(name: string, birthDate: Date, age: number) {
      // usamos o this para acessar as propriedades da instância da classe,
      // ele representa a própria instância que estamos criando
      // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
      this.name  = name;
      this.birthDate  = birthDate;
      this.age  = age;
  }
/* void é usado sempre que uma função não retorna nada explicitamente 
(geralmente significa que ela retorna undefined implicitamente) 
e never sempre que uma função não retorna nada (não retorna nem undefined) */
  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {// void é um tipo que representa a ausência de valor ou tipo de retorno de uma função ou método que não retorna nada
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 27
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."


  interface Hero {// tipagem de objeto com interface (interface é um tipo de objeto)
    _nome: string;
    _poder: string;
    gritoDeGuerra(primeiroParametroFrase: string): string
}

class Hero {
    constructor(nome: string, poder: string) {// o constructor é um metodo para criar e inicializar um objeto criado a partir de uma classe
        this._nome = nome;
        this._poder = poder;
    }

    gritoDeGuerra(frase: string) {
        return `${this._nome} diz: ${frase}`
    }
}

const Hero1 = new Hero('Capitão', 'Cavernaaaa!!')
const Hero2 = new Hero('Chapolin', 'Colorado!!')

console.log(Hero1.gritoDeGuerra('Eu sou o capitão cavernaaaa!!'))
console.log(Hero2.gritoDeGuerra('Não contavam com minha astúcia!!!'))

interface Dog {// tipagem de objeto com interface (interface é um tipo de objeto)
    _nome: string;
    _raca: string;
    _idade: number;
    _cor: string;
    DogaoLindo(frase: string): string// metodo que retorna uma string 
}

class Dog {
    constructor(nome: string, raca: string, idade: number, cor: string) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade;
        this._cor = cor;
    }
    DogaoLindo(frase: string) {
        return `O dog ${this._nome},é da raça ${this._raca} tem ${this._idade} anos de idade é da cor: ${this._cor} e ${frase}`
    }
}

const Dog1 = new Dog('Alfredo', 'Vira-latta Caramelo', 2, 'Caramelinho') 

console.log(Dog1.DogaoLindo('É um dogão lindo!!'))