//Isso é também um padrão de projeto 

const prod1 = {
    nome: 'Cachorro',
    preco: 'Inestimavel'
}

//Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) //Sempre vai criar uma nova instância de objeto
//Factory function = função fábrica

//É uma função que sempre retorna uma instância de um objeto
