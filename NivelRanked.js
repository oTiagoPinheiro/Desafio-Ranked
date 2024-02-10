
function Ranked (vitoria, derrota){
    return vitoria - derrota
}

let nivelRanked = Ranked (106, 5)
let nivel

switch (true){
    case (nivelRanked <= 10):
    nivel = "Ferro"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked <= 20):
    nivel = "Bronze"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked <= 50):
    nivel = "Prata"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked <= 80):
    nivel = "Ouro"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked <= 90):
    nivel = "Diamante"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked <= 100):
    nivel = "Lendário"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
    case (nivelRanked >= 101):
    nivel = "Imortal"
    console.log ("O Herói tem saldo de " + nivelRanked + " e está no nível " + nivel)
    break
}
