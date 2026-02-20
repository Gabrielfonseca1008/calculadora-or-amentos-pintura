let diasEstimados = 15


let custoDeVida = 1800.00

//Para calcular a diária livre ideal
function calcularDiarias() {
    let cdv = custoDeVida
    let pretensao = (cdv * 2)
    let diariaLivre = pretensao / 22
    console.log(`Sua diária livre ideal é de R$${diariaLivre.toFixed(2)}`)
}


//Para calcular o valor gasto com transporte
function calcularTransporte() {
    let tarifasTransporte = {
        "Uber": 20.00,
        "Onibus": 5.70,
        "Carro": 10.00
    }

    let desolcamento = ["Uber", "Onibus", "Carro"]
    for(let i=0 ; i<desolcamento.length ; i++) {
        if(desolcamento[i] === "Uber") {
            let valorTarifa = tarifasTransporte["Uber"]
            let transporteUber = valorTarifa * diasEstimados
            console.log(`O valor gasto com Uber será de R$${transporteUber.toFixed(2)}`)
        } else if(desolcamento[i] === "Onibus") {
            let valorTarifa = tarifasTransporte["Onibus"]
            let transporteOnibus = valorTarifa * diasEstimados
            console.log(`O valor gasto com Onibus será de R$${transporteOnibus.toFixed(2)}`)
        } else if(desolcamento[i] === "Carro") {
            let valorTarifa = tarifasTransporte["Carro"]
            let transporteCarro = valorTarifa * diasEstimados
            console.log(`O valor gasto com Carro será de R$${transporteCarro.toFixed(2)}`)
        }
    }
}

