
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

calcularDiarias(1800.00)
calcularTransporte(20, "Onibus")

