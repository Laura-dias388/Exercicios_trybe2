type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;

const str: unknown = 'texto'; // simulando um valor supostamente desconhecido

// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
(str as string).split('') // Corrigindo o erro acima usando o 'as'

const num: string = '2';

// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
(num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown

// [...]
function stringToJson1<T>(str: string): T {
  const result = JSON.parse(str);// json.parse retorna um unknown por padrão e não é possível converter um unknown para um tipo genérico
  return result;
}

const user1 = stringToJson1<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

const address1 = stringToJson1<Address>('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;
// [...]

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação