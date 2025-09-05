//função construtora

function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //Método público

    /*
    Algo interessante aqui é como o let produz um atribudo privado. Ou seja, por não estar
    visivel fora do escopo da função, por natureza já é privado. O método abaixo é quase como
    se fosse um método setter na orientação a objetos
    */
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método público
    /*
    Isso aqui é semelhante ao método getter na orientação à objetos
    */  
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new carro(178, 5)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(300, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())