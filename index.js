let nome ="Bianca"
let quantidadeExp = "2002"

if (quantidadeExp === 1000) {
    quantidadeExp = "Ferro" 
}
else if (quantidadeExp >= 1001 && quantidadeExp <= 2000){
    quantidadeExp = "Bronze" 
}
else if (quantidadeExp >= 2001 && quantidadeExp <= 5000){
    quantidadeExp = "Prata" 
}
else if (quantidadeExp >= 5001 && quantidadeExp <= 7000){
    quantidadeExp = "Ouro" 
}
else if (quantidadeExp >= 7001 && quantidadeExp <= 8000){
    quantidadeExp = "Platina" 
}
else if (quantidadeExp >= 8001 && quantidadeExp <= 9000){
    quantidadeExp = "Ascendente" 
}
else if (quantidadeExp >= 9001 && quantidadeExp <= 10000){
    quantidadeExp = "Imortal" 
}
else if (quantidadeExp >= 1001){
    quantidadeExp = "Radiante" 
}


console.log("O Herói", nome, "está no nível", quantidadeExp);
