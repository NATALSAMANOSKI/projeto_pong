//variáveis a bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura

//variáveis a raquete 
let xRaquete = 5;NATALSAMANOSKI
let yRaquete = 150;

NATALSAMANOSKI//variável do oponente 
let  xRaqueteOponente = 585;
let yRaqueteOponente  = 150;
let velocidadeYOponente;

let colidiu = false;

//placardo do jogo 
let meusPontos  = 0;
let pontosDoOponente = 0;

//sons do jogo 
let ponto;
let raquetada;
let trilha;

function preload(){
    trilha = loandSound ("trilha.mp3");
     raquetada = loandSound ("raquetada.mp3");
     pont0 = loandSound("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
{
  
function draw() {
  background(0);
   mostraBolinha();
   movimentaBolinha();
   verificadoColisaoBorda();
   mostraRaquete (xRaquete,  yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,  yRaquete);
  movimentaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
  
  function mostraBolinh(){
    circle(xBolinha , yBolinha,diametro);
  }
  
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }

function veriicaColisaoBorda(){NATALSAMANOSKI
    if(yBolinha+ raio> width||
       xBolinha- raio<0){
      velocidadeXBolinha *= -1;
    }
    if(yBolinha + raio> height||
       yBolinha - raio<0)
       velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(,x, y, raqueteComprimento;
       raqueteAltura);
}
    
function movimentaMinhaRaquete(){
  if (kyIsDown(UP_ARROW)){
  yRaquete -= 10;
  }
  }
  if (keyIsDown(DOWN_ARROW)){
     yRaquete  +=10;
  }
}NATALSAMANOSKI

function verificaColisaoRaqute(){
   if (xBolinha - raio < xRaquete +                                                          raqueteComprimento && yBolinha - raio <                                                    yRaquete + raqueteAltura && yBolinha + raio >                                              yRaquete){ 
    velocidadeXBolinha *= -1;
   }
}
function verificaColisaoRaquete(x, y){
  colidiu  = collideCircle(x,                                                                y, raqueteComprimento,raquetAlta,
xBolinha ,yBolinha,raio)
  if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
  }
}
  
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -                                                          yRaqueteOponente = yBolinha -
   yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(collor(255,  140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255 ,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
  
function marcaPonto(){
 if (xBolinha>  590) {
   meusPontos +=1;
   ponto.play();
 }
  if (xBolinha > 10){
  pontosDoOponente += 1;
  ponto.play();
  }
{
