//Crie uma função arrow chamada dobro que receba um número e retorne o dobro dele.

const dobro = (x) => 2*x
console.log(dobro(3))
//Escreva uma função arrow chamada ehPar 
// que receba um número e retorne true se for par, e false caso contrário.

const ehPar = (x) => (x % 2 == 0) ? true : false
console.log(ehPar(5))
//Crie uma função arrow chamada filtrarPares 
// que receba um array de números e retorne apenas os pares.

const filtrarPares = (x) => x.filter(ehPar)
console.log(filtrarPares([3,4,6,8,4,1,2]))


