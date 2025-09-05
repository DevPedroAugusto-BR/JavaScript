const notas = [2.2, 3.2, 1.5, 5, 6, 9]

//Sem callback 
let notasBaixas = []
for(let i in notas) {
    if(notas[i] > 6) {
        notasBaixas[i] = notas[i]
    }
}

console.log(notasBaixas)

//Com callback
notasBaixas = notas.filter(function (nota) {
    return nota < 6
})

console.log(notasBaixas)

//Com callback e arrow function
const notasBaixas2 = notas.filter(nota => {
    return nota < 7
})

console.log(notasBaixas2)