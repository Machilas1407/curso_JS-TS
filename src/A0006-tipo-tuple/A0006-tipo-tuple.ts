//Tuple
const dadosCliente1: [number, string] = [1, 'Marcello'];
const dadosCliente2: [number, string, string] = [1, 'Marcello', 'Máchilas'];
const dadosCliente3: [number, string, string?] = [1, 'Marcello', 'Máchilas'];
const dadosCliente4: [number, string, ...string[]] = [
    1,
    'Marcello',
    'Máchilas',
];

console.log(dadosCliente1);

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Máchilas';
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Marcello', 'Máchilas'];
const array2: ReadonlyArray<string> = ['Marcello', 'Máchilas'];

console.log(array1);
console.log(array2);
