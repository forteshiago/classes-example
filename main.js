class Pessoa {
  constructor(nome, altura, peso){
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}
class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, temArma, isMembroFundador, isImortal){
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }
  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true, //tem armadura?
  true, //tem arma?
  true, //e membro fundador?
  false, //e imortal?
);
const spider = new Vingador(
  "Spider-man",
  "1.70",
  "70kg",
  ["Disparadores de teia", "Modo de reconhecimento", "Sentido Aranha", "Força sobre-humana"],
  true,
  true,
  false,
  false,
);

document.getElementById("thor").onclick = function (){
  thor.lutar();
};
document.getElementById("spider").onclick = function(){
  spider.lutar();
}
