var sonic
var sonicanimation

function preload(){ // função que carregar todas as imagens e animações
  sonicanimation = loadAnimation ("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,windowHeight);
  sonic = createSprite(500,600)
  sonic.addAnimation("sonic",sonicanimation )
 
  }
  

function draw(){
  background("black");
  drawSprites(); 
  if(keyIsDown(RIGHT_ARROW)){
    sonic.x+= 10
  }   
  if(keyIsDown(LEFT_ARROW)){
    sonic.x-= 10
  }
  }

