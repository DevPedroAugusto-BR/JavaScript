/**
 * 📚 Lista de Exercícios – Funções em JavaScript
🔹 1. Funções Arrow

Crie uma função arrow chamada dobro que receba um número e retorne o dobro dele.

Escreva uma função arrow chamada ehPar que receba um número e retorne true se for par, e false caso contrário.

Crie uma função arrow chamada filtrarPares que receba um array de números e retorne apenas os pares.

🔹 2. Funções Anônimas

Crie uma função anônima atribuída a uma variável chamada saudacao que retorne a mensagem "Olá, mundo!".

Utilize uma função anônima dentro de um setTimeout para exibir no console a frase "Executado após 2 segundos".

Crie um array de nomes e utilize o método .map() com uma função anônima para transformar todos os nomes em maiúsculas.

🔹 3. Funções Callback

Crie uma função executar que receba um número e uma função callback. A função deve aplicar o callback ao número.

Exemplo: executar(5, x => x * 3) deve retornar 15.

Implemente uma função processarArray que receba um array de números e uma função callback. Ela deve aplicar o callback em cada elemento e retornar um novo array.

Simule uma chamada assíncrona usando setTimeout:

Função buscarDados(callback) deve esperar 2 segundos e depois chamar o callback passando "Dados recebidos!".

🔹 4. Funções Construtoras

Crie uma função construtora Pessoa que receba nome e idade e crie objetos com essas propriedades.

Adicione ao construtor Pessoa um método apresentar que retorne uma string no formato:
"Olá, meu nome é João e tenho 25 anos.".

Crie um array de pessoas (instâncias de Pessoa) e percorra-o, chamando o método apresentar para cada pessoa.

🔹 5. Funções Factories

Crie uma função factory chamada criarProduto que receba nome e preco e retorne um objeto com essas propriedades.

Modifique a função criarProduto para também calcular e retornar o preço com desconto de 10%.

Crie uma função factory criarContaBancaria que receba titular e retorne um objeto com:

saldo inicial em 0

métodos depositar(valor) e sacar(valor)

método consultarSaldo() que retorna o saldo atual.
 */