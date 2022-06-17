// Arrays<T> -T[] -- T significa tipo
export function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}
const result = multiplicarArgs(1, 2, 3);
const concatenacao = concatenaString('Marcello', ' Máchilas');
const upper = toUpperCase('a', 'b', 'C');

console.log(result);
console.log(concatenacao);
console.log(upper);
