const objetoA: {
    chaveA: string;
    readonly chaveB: string; //readonly bloqueia a alteracao do valor da chave
} = {
    chaveA: 'ValorA',
    chaveB: 'ValorB',
};

objetoA.chaveA = 'Outro valor';

console.log(objetoA);

// Objeto aberto
const objetoB: {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'ValorA',
    chaveB: 'ValorB',
};

objetoB.chaveA = 'Outro valor';
objetoB.chaveC = 'Nova chave';
objetoB.chaveD = 'Nova chave 2';

console.log(objetoB);
