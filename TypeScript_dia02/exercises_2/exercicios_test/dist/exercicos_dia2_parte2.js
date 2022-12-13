"use strict";
// função que converte de string para json
function stringToJson(str) {
    const result = JSON.parse(str);
    return result;
}
// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = stringToJson('{"street":"Rua Tamarindo","number":1}');
user.name;
address.street;
const str = 'texto'; // simulando um valor supostamente desconhecido
// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
str.split(''); // Corrigindo o erro acima usando o 'as'
const num = '2';
// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
num; // Corrigindo o erro acima convertendo primeiramente para unknown
// [...]
function stringToJson1(str) {
    const result = JSON.parse(str); // json.parse retorna um unknown por padrão e não é possível converter um unknown para um tipo genérico
    return result;
}
const user1 = stringToJson1('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
const address1 = stringToJson1('{"street":"Rua Tamarindo","number":1}');
user.name;
address.street;
// [...]
function identity(value, message) {
    console.log(message);
    return value;
}
const returnNumber = identity(100, "Olá");
const returnString = identity("100", "Mundo");
const returnBoolean = identity(true, "Olá, Mundo!");
function getArray(items) {
    return new Array().concat(items); // construindo um Array que só pode conter elementos do tipo T
}
const numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
const stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
