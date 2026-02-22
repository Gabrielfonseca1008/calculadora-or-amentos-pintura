
//Para calcular a diária livre ideal
function calcularDiarias(custoDeVida) {
    const pretensao = custoDeVida * 2
    return pretensao / 22 // Considerando média de 22 dias úteis por mês
}


//Para calcular o valor gasto com transporte
function calcularTransporteDiario(deslocamento) {

    const tarifasTransporte = {
        Uber: 10.00,
        Onibus: 5.70,
        Carro: 24.00
    }

    if (!(deslocamento in tarifasTransporte)) {
    return 0
    }

    // ida e volta no mesmo dia
    return tarifasTransporte[deslocamento] * 2
}

//Para calcular o custo total com funcionários, considerando pintores e ajudantes.
function calcularFuncionarios(pintores, ajudantes){
    let diariaPintor = 200
    let diariaAjudante = 100

    return (pintores * diariaPintor) + 
            (ajudantes * diariaAjudante)
}


function calcularAlimentacao(qtdePessoas){
    let valorRefeicao = 30.00
    return qtdePessoas * valorRefeicao
}

const complexidade = {
    nivelum: { nome: "Pintura Simples", margem: 0.05 },
    niveldois: { nome: "Pintura Intermediária", margem: 0.10 },
    niveltres: { nome: "Pintura Completa", margem: 0.20 },
    nivelquatro: { nome: "Pintura Especializada", margem: 0.30 }
}


function calcularCustoDiarioTotal(
    pintores,
    ajudantes,
    deslocamento,
    custoDeVida,
    qtdeEquipe
){

    const minhaDiaria = calcularDiarias(custoDeVida)
    const custoEquipe = calcularFuncionarios(pintores, ajudantes)
    const custoAlimentacao = calcularAlimentacao(qtdeEquipe + 1)
    const custoTransporte = calcularTransporteDiario(deslocamento)

    return minhaDiaria +
           custoEquipe +
           custoAlimentacao +
           custoTransporte
}

function calcularCustoTotalObra(
    diasEstimados,
    pintores,
    ajudantes,
    deslocamento,
    custoDeVida,
    qtdeEquipe
){

    const custoDiario = calcularCustoDiarioTotal(
        pintores,
        ajudantes,
        deslocamento,
        custoDeVida,
        qtdeEquipe
    )

    return custoDiario * diasEstimados
}

function aplicarMargem(custoTotal, nivelComplexidade){

    const margem = complexidade[nivelComplexidade].margem

    return custoTotal * (1 + margem)
}

function gerarOrcamentoFinal(
    diasEstimados,
    pintores,
    ajudantes,
    deslocamento,
    custoDeVida,
    nivelComplexidade,
    qtdeEquipe
){

    const custoBase = calcularCustoTotalObra(
        diasEstimados,
        pintores,
        ajudantes,
        deslocamento,
        custoDeVida,
        qtdeEquipe
    )

    const valorFinal = aplicarMargem(custoBase, nivelComplexidade)

    return valorFinal
}

function calcularOrcamento(){

    const custoDeVida = Number(document.getElementById("custoDeVida").value)
    const deslocamento = document.getElementById("deslocamento").value
    const pintores = Number(document.getElementById("pintores").value)
    const ajudantes = Number(document.getElementById("ajudantes").value)
    const diasEstimados = Number(document.getElementById("diasEstimados").value)
    const nivelComplexidade = document.getElementById("complexidade").value
    const qtdeEquipe = Number(document.getElementById("qtdeEquipe").value)

    const total = gerarOrcamentoFinal(
        diasEstimados,
        pintores,
        ajudantes,
        deslocamento,
        custoDeVida,
        nivelComplexidade,
        qtdeEquipe
    )

    document.getElementById("resultado").innerText =
        `O valor total do orçamento é: R$ ${total.toFixed(2)}`
}