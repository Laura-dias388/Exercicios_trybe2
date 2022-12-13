class Person2 {
  name: string;
  birthDate: Date;
  age?: number;// a interrogação indica que o parâmetro é opcional e pode ser omitido na chamada do construtor da classe 

  constructor(name: string, birthDate: Date, age?: number) {
      this.name  = name;// o this é usado para acessar as propriedades da instância da classe
      this.birthDate  = birthDate;
      this.age  = age;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}
const person1_2 = new Person2("Jane Doe", new Date("1986-01-01"));
const person2_2 = new Person2("Jon Doe", new Date("1980-08-05"), 31);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 31
// }
// "Jon Doe está andando."