let nome = "Anderson 'O Construtor'";
let xp = 10002;
let nivel = "";
let niveis = [[0,"Ferro"],
[1001,"Bronze"],
[2001,"Prata"],
[5001,"Ouro"],
[7001,"Platina"],
[8001,"Ascendente"],
[9001,"Imortal"],
[10001,"Radiante"],];
let mensagemFinal = ""
var loop = 0;

while(loop < niveis.length && xp >= niveis[loop][0]){
  nivel = niveis[loop][1];
  loop++;
}

if (nome === "") {
  mensagemFinal = "Preencha o nome corretamente";
}

if (nivel === "") {
  mensagemFinal = "Informe uma quantidade de experiência válida. ( xp >= 0)";
}

if (nome !== "" && nivel !== "") {
  mensagemFinal = `O Herói de nome ${nome} está no nível de ${nivel}`;
}

console.log(mensagemFinal);