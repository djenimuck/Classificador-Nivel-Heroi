//variáveis
let nomeDoHeroi = "Athena"
let nivelDoHeroi
let xp = 4054

//estrutura de decisão
if (xp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

//saída
console.log("O herói de nome " + nomeDoHeroi + "está no nível de " + nivelDoHeroi)