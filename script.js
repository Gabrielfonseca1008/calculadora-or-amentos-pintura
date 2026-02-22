
//Para calcular a diária livre ideal
function calcularDiarias(custoDeVida) {
    let pretensao = (custoDeVida * 2)
    let diariaLivre = pretensao / 22
    console.log(`Sua diária livre ideal é de R$${diariaLivre.toFixed(2)}`)
}


//Para calcular o valor gasto com transporte
function calcularTransporte(diasEstimados, deslocamento) {

    let tarifasTransporte = {
        Uber: 10.00,
        Onibus: 5.70,
        Carro: 24.00
    }

    if(deslocamento === "Uber") {
            let valorTarifa = tarifasTransporte["Uber"]
            let transporteUber = valorTarifa * diasEstimados * 2
            console.log(`O valor gasto com Uber será de R$${transporteUber.toFixed(2)}`)
        } else if(deslocamento === "Onibus") {
            let valorTarifa = tarifasTransporte["Onibus"]
            let transporteOnibus = valorTarifa * diasEstimados * 2
            console.log(`O valor gasto com Onibus será de R$${transporteOnibus.toFixed(2)}`)
        } else if(deslocamento === "Carro") {
            let valorTarifa = tarifasTransporte["Carro"]
            let transporteCarro = valorTarifa * diasEstimados * 2
            console.log(`O valor gasto com Carro será de R$${transporteCarro.toFixed(2)}`)
        } else {
            console.log("Tipo de deslocamento inválido.")
        }
}

//Para calcular o custo total com funcionários, considerando pintores e ajudantes.
function calcularFuncionarios(pintores, ajudantes){
    let diariaPintor = 200
    let diariaAjudante = 100

    let custoTotal = 
        (pintores * diariaPintor) + 
        (ajudantes * diariaAjudante)

    console.log(`O custo diário com funcionários é de R$${custoTotal.toFixed(2)}`)
}


function calcularAlimentacao(qtdePessoas){
    let valorRefeicao = 30.00
    let custoAlimentacao = qtdePessoas * valorRefeicao
    console.log(`O custo diário com alimentação é de R$${custoAlimentacao.toFixed(2)}`)
}

let complexidade = {
    nivelUm: "Pintura Simples",
    nivelDois: "Pintura Intermediária",
    nivelTres: "Pintura Completa",
    nivelQuatro: "Pintura expecializada"
}
let nivelComplexidade = Object.values(complexidade)

console.log(nivelComplexidade)


calcularDiarias(1800.00)
calcularTransporte(1, "Carro")
calcularFuncionarios(1, 1)
calcularAlimentacao(2)