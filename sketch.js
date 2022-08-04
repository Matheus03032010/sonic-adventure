var sonic
var sonicanimation;
var sonicpulo;
var solo

function preload(){ // função que carregar todas as imagens e animações
  sonicanimation = loadAnimation ("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png")
  sonicpulo = loadAnimation("assets/p1.png","assets/p2.png", "assets/p3.png","assets/p4.png","assets/p5.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,windowHeight);
  sonic = createSprite(500,600)
  sonic.addAnimation("sonic",sonicanimation )
  sonic.addAnimation("sonicpulo",sonicpulo )

  solo = createSprite(windowWidth/2, windowHeight-200, width, 20)
 
  }
  

function draw(){
  background("black");
  drawSprites(); 
  controle()
  
}


  function controle(){
    if(keyIsDown(RIGHT_ARROW)){
      sonic.x+= 10
    }   
    if(keyIsDown(LEFT_ARROW)){
      sonic.x-= 10
    }
  
    sonic.velocityY += 0.8
     if(keyDown("space") && sonic.y>(windowHeight-400)){
      sonic.velocityY= -10
      sonic.changeAnimation("sonicpulo", sonicpulo)
      sonic.scale = 1.2
    }
  
    if(sonic.collide(solo)){
      sonic.changeAnimation("sonic", sonicanimation)
      sonic.scale = 1
    }
  }

  function inimigos(){
    
  }