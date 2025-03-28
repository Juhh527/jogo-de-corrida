function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#E682B4");
  } else {
    background("rgb(210,160,213)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("👱‍♀️", xJogador1, 100);
  text("👩‍🦰", xJogador2, 180);
  text("👩", xJogador3, 270);
  text("👩‍🦳", xJogador4,350);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Jogador 1 ganhou!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 ganhou!", 0, 200);
    noLoop();
  }
  if (xJogador3 > 350){
    text("Jogador 3 ganhou!", 0, 200);
  }
  if(xJogador4 > 350){
    text("Jogador 4 ganhou!", 0,200);
  }
}

function keyReleased() {
  if (key == "z") {
    xJogador1 += random(20);
  }
  if (key == "m") {
    xJogador2 += random(20);
  }
  if (key == "x"){
    xJogador3 += random(20);
  }
  if (key == "n"){
    xJogador4 +=random(20);
  }
}
