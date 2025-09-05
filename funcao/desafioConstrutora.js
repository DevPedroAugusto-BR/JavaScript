/**
 * Passar esse exemplo para função construtora
 * const pessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('João')
pessoa.falar()
 */

function pessoa(nome = 'Default') {

    this.falar = function() {
        return `Meu nome é ${nome}`
    }
}

const p1 = new pessoa()
console.log(p1.falar())