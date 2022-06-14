/* eslint-disable*/
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Marcello'; // Qualquer tipo de string: `` '' ""
let idade: number = 27; // 10, 1.57, -5.55, exf00d, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['Um', 'Dois', 'Três'];
let arrayDeStrings2: string[] = ['Um', 'Dois', 'Três'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {  // ao colocar o ? siginifica que aquela chave é opcional
    idade: 27,
    nome: 'Marcello'
}

//Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;



