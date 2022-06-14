function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    //pessoa já foi utilizado em outro arquivo, para usar novamente tem que utilizar o export ou import
    nome: 'Marcello',
    soobreNome: 'Máchilas',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.soobreNome);
    },
};

semRetorno('Marcello', ' Máchilas');
pessoa.exibirNome();

export { pessoa };
