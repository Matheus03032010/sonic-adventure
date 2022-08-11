var sonic
var sonicanimation;
var sonicpulo, sonicleft;
var solo;
var robo, inimigo_anm, inimigo;
var estado = "jogar";
var b1;
var b2;
var grupob, grupocoin, coinimg, grupoin;
var score=0
function preload(){ // função que carregar todas as imagens e animações
  sonicanimation = loadAnimation ("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png")
  sonicpulo = loadAnimation("assets/p1.png","assets/p2.png", "assets/p3.png","assets/p4.png","assets/p5.png")
  sonicleft = loadAnimation ("assets/s5.png","assets/s6.png","assets/s7.png","assets/s8.png")
  inimigo_anm = loadAnimation ("assets/i6.png","assets/i7.png","assets/i8.png","assets/i9.png","assets/i10.png","assets/i11.png","assets/i12.png","assets/i13.png")
  b1 = loadAnimation("assets/b1.png")
  b2 = loadAnimation("assets/b2.png")
  coinimg = loadImage ("assets/coin.png")
}

function setup(){ // todas as configuraçoes dos objetos
  grupob=new Group() 
  grupocoin= new Group()
  grupoin = new Group()
  
  createCanvas(windowWidth,windowHeight);
  sonic = createSprite(500,600)
  sonic.addAnimation("sonic",sonicanimation )
  sonic.addAnimation("sonicpulo",sonicpulo )
  sonic.addAnimation("sonicleft",sonicleft )

  // robo = createSprite(200, 600)
  // robo.addAnimation("robo")
  solo = createSprite(windowWidth/2, windowHeight-200, width, 20)

  inimigo = createSprite(10,580,20,20)
  inimigo.addAnimation("in",inimigo_anm)
  inimigo.scale = 1.5
  }
  

function draw(){
  background("black");
  drawSprites(); 

  if (estado === "jogar"){
    controle()
     inimigos()
     blocos()
      moedas()
      if(score>=2) {
      estado= "encerrar" 
      } 
     sonic.collide(grupob)

     text("SCORE: "+score, sonic.x+200, sonic.y-100)
     sonic.overlap(grupocoin, function (collector, collected){
      score ++
      collected.remove()
     })
     sonic.overlap(grupoin, function (collector, collected){
      score --
      collected.remove()
     })
  }else if (estado === "encerrar"){
   grupob.destroyEach()
   grupocoin.destroyEach()
   grupoin.destroyEach()
   inimigo.velocityX = 4
   controle()
  }
 
  camera.position.x= sonic.position.x
  solo.x =sonic.x
}
 

  function controle(){
    if(keyIsDown(RIGHT_ARROW)){
      sonic.x+= 10
      sonic.changeAnimation("sonic", sonicanimation)
    }   
    if(keyIsDown(LEFT_ARROW)){
      sonic.x-= 10
      sonic.changeAnimation("sonicleft", sonicleft)
    }
  
    sonic.velocityY += 0.8
     if(keyDown("space") && sonic.y>(windowHeight-1000)){
      sonic.velocityY= -10
      sonic.changeAnimation("sonicpulo", sonicpulo)
      sonic.scale = 1.2
    }
  
    if(sonic.collide(solo)){
      //sonic.changeAnimation("sonic", sonicanimation)
      sonic.scale = 1
    }
  }

  function inimigos(){
    if(frameCount%200===0){
    var robos = createSprite(sonic.x+800,sonic.y-60,20,20)
    robos.lifetime = 1000
    robos.addAnimation("robo", b2) 
    robos.scale = 0.5
    robos.velocityX =-3
     grupoin.add(robos)
    }
  }

  function blocos(){
    if(frameCount%60===0){
    var blocos= createSprite(sonic.x+800,sonic.y,20,20)
    blocos.lifetime = 1000
    blocos.addAnimation("blocos", b1) 
    blocos.scale = 0.5
    grupob.add(blocos)
    }
  }

  function moedas(){
    if(frameCount%100===0){
    var coin= createSprite(sonic.x+800,sonic.y,20,20)
    coin.lifetime = 1000
    coin.addAnimation("coin", coinimg) 
    coin.scale = 0.2
    grupocoin.add(coin)
    }
  }