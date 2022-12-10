"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const test = __importStar(require("./exercicio_para_fixar"));
console.log("A ÁREA DE UM:");
console.log(`- Lozangulo de D= 32cm e d= 18cm: ${test.calculateTheAreaOfTheLozenge(32, 18)}cm²`);
console.log(`- Lozangulo de D= 200cm e d= 50cm: ${test.calculateTheAreaOfTheLozenge(200, 50)}cm²`);
console.log(`- Lozangulo de D= 75cm e d= 75cm: ${test.calculateTheAreaOfTheLozenge(75, 75)}cm²`);
console.log(`- Trapézio de B = 100cm, b = 70cm e altura = 50cm: ${test.calculateTheAreaOfTheTrapézio(100, 70, 50)}cm²`);
console.log(`- Trapézio de B = 75cm, b = 50cm e altura = 35cm: ${test.calculateTheAreaOfTheTrapézio(75, 50, 35)}cm²`);
console.log(`- Trapézio de B = 150cm, b = 120cm e altura = 80cm: ${test.calculateTheAreaOfTheTrapézio(150, 120, 80)}cm²`);
console.log(`- Calcule a área de um círculo de raio igual 25cm: ${test.calculateTheAreaOfTheCírculo(25)}cm²`);
console.log(`- Calcule a área de um círculo de raio igual 100cm: ${test.calculateTheAreaOfTheCírculo(100)}cm²`);
console.log(`- Calcule a área de um círculo de raio igual 12,5cm: ${test.calculateTheAreaOfTheCírculo(12.5)}cm²`);
