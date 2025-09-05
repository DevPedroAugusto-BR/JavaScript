//Crie uma função anônima atribuída a uma variável 
// chamada saudacao que retorne a mensagem "Olá, mundo!".
const saudacao = function() {
    return `Olá, Mundo!`
}



//Utilize uma função anônima dentro de um setTimeout para 
// exibir no console a frase "Executado após 2 segundos".

const exibirExec = function() {
    setTimeout: 2000,
    console.log('Executado após 2 segundos')
}

//Crie um array de nomes e utilize o método .map() 
// com uma função anônima para transformar todos os nomes em maiúsculas.

const nomes = ['Carlos', 'Ana', 'Joao']
const nomesWithMap = function(nomes) {
    return nomes.map(nomes.ToUpper())
}