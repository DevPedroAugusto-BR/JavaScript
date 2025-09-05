//Função criar produto que vai receber nome e o Preço e essa função vai retornar 
//um novo produto que vai ter um nome e um preço e um desconto

function criarProduto(name = 'Televisão', preco = 800.0, desconto = 0.10) {
    return {
        nome: name,
        valor: preco,
        total: preco - preco*desconto
    }
}

console.log(criarProduto('Smartphone', 876.9))