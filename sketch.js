



var form,player,playerImg1,playerImg2,playerImg3,playerImg4,Ground,nonplayer,nonplayerImg,Ground2,Ground3,Ground4;
var GameState = 1;
var Button1Img,Button2Img;
var Sate = 1;
var Enemy,Enemy2,EnemyImg,Enemy2Img;
var EnemyGroup;
var speedState = 1;
var jumpState = 1;
var fullState = 1;
var npspeedState = 1;
var npjumpState = 1;
var Life1,Life2,Life3,Lifebox,Life1Img,Life2Img,Life3Img,LifeboxImg;
var score = 0
var Health = 3;
var Fly, FlyImg;
var Speed,SpeedImg;
var Full3 , Full3Img
var npspeed = 1;
var bg , bgImg,bg2;
var bgGround;
var building1,buildingImg;
function preload() {
  //Button1Img = loadImage("Untitled12.png")
  //Button2Img = loadImage("Untitled34.png")
  Life1Img = loadImage("Untitled51.png")
  Life2Img = loadImage("Untitled51.png")
  Life3Img = loadImage("Untitled51.png")
  LifeboxImg = loadImage("Untitled61.png")
  FlyImg = loadImage("Untitled59.png")
  SpeedImg = loadImage("Untitled69.png")
  nonplayerImg = loadAnimation("policeman_PNG89033.png","policeman_PNG89.png","policeman.png")
  playerImg = loadAnimation("unnamed.png","unnamed3.png","unnamed4.png","unnamed3.png","unnamed.png")
  playerImg2 = loadAnimation("thief-dizzy_22350-510.png")
  playerImg3 = loadAnimation("egr.png")
  Full3Img = loadImage("Untitled60.png")
  bgImg = loadImage("imag.png")
  EnemyImg  = loadImage("download.png")
  Enemy2Img = loadImage("ghvkkdownload.png")
  playerImg4 = loadAnimation("unnamed57.png","unnamed8768.png","unnamed47.png","unnamed8768.png","unnamed57.png")
  buildingImg = loadImage("dsgsg.png")
  //hittingSound = loadSound("Recording (3).mp3");
  diesound = loadSound("collided.wav");
  //gettingskillsound = loadSound("Recording (5).mp3");
  //enemycatchsound = loadSound("Recording (2).mp3");
}




function setup() {
  createCanvas(1200,400);
  
  form = new Form()
 bg = createSprite(camera.x+300,200,20,20);
 bg.addImage("img",bgImg);
 bg.scale = 2;
 bg.visible = false;
 building1 = createSprite(displayWidth/2,200,20,20);
 building1.addImage("img",buildingImg);
 building1.visible = false
 //building1.scale = 2.4
 
 player = createSprite(-50,105,30,30)
 player.addAnimation("RUNNING",playerImg)
 player.addAnimation("PAIN",playerImg2)
 player.addAnimation("STOP",playerImg3)
 player.addAnimation("super",playerImg4)
 player.addAnimation("superjump",playerImg4)
 player.scale = 0.25
 player.visible = false;
 player.debug = true
 player.setCollider("rectangle",0,0,700,370)
 
 nonplayer = createSprite(-200,105,30,30)
 nonplayer.addAnimation("runing",nonplayerImg)
 nonplayer.debug = true
 nonplayer.scale = 0.2
 nonplayer.setCollider("rectangle",0,0,850,460)
 nonplayer.visible = false;

 Lifebox = createSprite(1100,30,20,20)
 Lifebox.addImage("Box",LifeboxImg)
 Lifebox.scale = 0.2
 Lifebox.visible = false;
 Ground = createSprite(width/2,390,20000,20)
  Ground.visible = false
 Ground.shapeColor = "orange"
 Ground2 = createSprite(-50,130,500,10);
 
 Ground2.visible = false;
 Ground3 = createSprite(200,110,10,50)
 Ground3.visible = false;

 if(Health === 3){
 Life1 = createSprite(1065,30,20,20)
 Life1.addImage("health",Life1Img)
 Life1.scale = 0.15
 Life1.visible = false

 Life2 = createSprite(1100,30,30,20)
 Life2.addImage("healt",Life2Img)
 Life2.scale = 0.15
 Life2.visible = false

 Life3 = createSprite(1135,30,30,20)
 Life3.addImage("heal",Life3Img)
 Life3.scale = 0.15
 Life3.visible = false
 }
 Restart = createButton('Restart');
 Restart.position(displayWidth/2 -10,displayHeight/2 - 100);
 Restart.hide();
 Back = createButton('Back');
 Back.position(displayWidth/2 + 300,displayHeight/2 - 350);
 Back.hide();



 EnemyGroup = new Group();
 speedGroup = new Group();
 jumpGroup = new Group();
 fullGroup = new Group();
 GroundGroup = new Group();
 buildingGroup = new Group()
}


function draw() {
 background("white")
 console.log(frameCount)
 form.display()
  

  if(GameState === 2 ){

    building1.visible = true;
    player.visible = true;
    player.velocityX = 8;
    Ground.visible = true;
    Ground2.visible = true;
    Ground3.visible = true;
    nonplayer.visible = true;
    Lifebox.visible = true;
    bg.visible = true;
    if(npspeed === 1){
      nonplayer.velocityX = 7;
      }

    if(npspeed === 2){
      nonplayer.velocityX = 10;
    }  
    Life1.visible = true;
    Life2.visible = true;
    Life3.visible = true;
    
    //Ground.velocityX = 6
    //if (Ground.x > 800){ 
   ///  Ground.x = Ground.width/2; 
    //}

    if(nonplayer.isTouching(Ground3)){
      nonplayer.velocityY = -10;
      
    }
    nonplayer.velocityY = nonplayer.velocityY + 0.9

    if(player.isTouching(Ground3)){
      player.velocityY = -10;
    }
     player.velocityY = player.velocityY + 0.9


     if(player.isTouching(Ground)){
      Sate = 2
   }
   if(Sate === 2){
     camera.position.x = player.x+160;
     player.setCollider("rectangle",0,0,300,370)
     //console.log("player",player.y)
     Lifebox.x = camera.x+500
     Life1.x = camera.x+465
     Life2.x = camera.x+500
     Life3.x = camera.x+535
     bg.x = camera.x+300
     if(keyDown("space")  && player.y >= 326){
      player.velocityY = -15;
      player.velocityY = player.velocityY + 0.9
     
     }
     
     if (building1.x < camera.x-900){
       building1.x = camera.x+700;
     }
     //console.log(speedState)
    // console.log("healthstate"+Health)
     //console.log(jumpState)
     //console.log(Sate)

     if(EnemyGroup.isTouching(player) && Health === 3){

      player.velocityX = 0
      Health = 2
      Life3.destroy();

     EnemyGroup.destroyEach()
     speedState = 1
     jumpState = 1
     if(jumpState === 1){
      player.changeAnimation("RUNNING",playerImg)
    }
    if(speedState === 1){
      player.changeAnimation("RUNNING",playerImg)
    }
    

     }else if(EnemyGroup.isTouching(player) && Health === 2){
      player.velocityX = 0
      Health = 1
      Life2.destroy();
      EnemyGroup.destroyEach()
      speedState = 1
      jumpState = 1

      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
        

     }else if(EnemyGroup.isTouching(player) && Health === 1){
      player.velocityX = 0
     Health = 0
      Life1.destroy();
      EnemyGroup.destroyEach()
      GameState = 3
      speedState = 1
      jumpState = 1
      
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
     }

     if(Health === 2){
     if(player.isTouching(fullGroup)){
      Health = 3
      
      Life3 = createSprite(1135,30,30,20)
      Life3.addImage("heal",Life3Img)
      Life3.scale = 0.15
     }

     }else if(Health === 1){

      if(player.isTouching(fullGroup)){
        Health = 2
        
        Life2 = createSprite(1100,30,30,20)
        Life2.addImage("healt",Life2Img)
        Life2.scale = 0.15


     }
    }




     if(player.isTouching(fullGroup)){
      fullGroup.destroyEach();


     }

     
 
     if(nonplayer.isTouching(EnemyGroup)){
       nonplayer.velocityY = -12;
       
     }
 
     if(nonplayer.isTouching(player)){
      GameState = 3;
      Health = 0;
      Life1.destroy()
      Life2.destroy()
      Life3.destroy()
      player.velocityY = 0;
     }
 
   if(speedGroup.isTouching(player)){
    speedState = 2;
    speedGroup.destroyEach();
   }
   if(speedState === 2){
     player.velocityX = 13;
     player.changeAnimation("super",playerImg4)

    }

    if(jumpGroup.isTouching(player)){
     jumpState = 2;
     jumpGroup.destroyEach();
     }
   if(jumpState === 2){
       player.changeAnimation("superjump",playerImg4)
      if(keyDown("space") && player.y >= 326){
       player.velocityY = -16;
       player.velocityY = player.velocityY + 0.9
      }
 
  
      
    }
 

   }


   if(speedGroup.isTouching(nonplayer)){
    npspeedState = 2;
    speedGroup.destroyEach();
   }
   if(npspeedState === 2){
     npspeed = 2

     if(GameState === 3){
       npspeedState = 1
       npspeed = 1
     }
    }
    
    if(EnemyGroup.isTouching(nonplayer)){
      npspeedState = 1;
      nonplayer.velocityX = 7;
    }

   spwanObstacle();
   speedPower();
   Powerjump()
   spwanGround();
   
   Getready();
   Back.show();
   if(keyDown("q")){
    GameState = 1
   }

  }

  if(GameState === 3){

    //console.log("you lose")
    spwanObstacle();
    speedPower();
    Powerjump()
    spwanGround();
    Getready();
    text("Score: "+ score,camera.x+200,30);
    player.changeAnimation("STOP",playerImg3)
    player.setCollider("rectangle",0,0,200,200)
    player.scale = 0.5
    EnemyGroup.setVelocityXEach(0);
    player.velocityX = 0
    Restart.show();
    nonplayer.velocityX = 0
    Back.show();
    Restart.mousePressed(()=>{
      building1.x = camera.x
      diesound.play()


      // Back.hide();
       Restart.hide();
       GameState = 2
       Health = 3
       Sate = 2  
       jumpState = 1
       speedState = 1
       EnemyGroup.destroyEach();
       jumpGroup.destroyEach();
       speedGroup.destroyEach();
       player.changeAnimation("RUNNING",playerImg)
       player.setCollider("rectangle",0,0,400,400)
       player.y = camera.y+150;
       player.x = camera.x;
       Ground.x = width/2;
       nonplayer.velocityX = 8;
       nonplayer.x = player.x-60;
    
       score = 0;
       player.scale = 0.25
       Life1 = createSprite(1065,30,20,20)
       Life1.addImage("health",Life1Img)
       Life1.scale = 0.15
       
      
       Life2 = createSprite(1100,30,30,20)
       Life2.addImage("healt",Life2Img)
       Life2.scale = 0.15
       
      
       Life3 = createSprite(1135,30,30,20)
       Life3.addImage("heal",Life3Img)
       Life3.scale = 0.15

     });

     //Back.mousePressed(()=>{
     // GameState = 1
      //form.display()
  
     //});
     
  }


  player.collide(Ground);
  nonplayer.collide(Ground);
  player.collide(Ground2);
  nonplayer.collide(Ground2);
  player.collide(GroundGroup);
  nonplayer.collide(GroundGroup);
 // console.log("gamestate",GameState)
  drawSprites();
 
  if(GameState === 2){
    score = score + Math.round(getFrameRate()/55);
    textSize(20)
    text("Score: "+ score,camera.x+200,30);
    
  }
  
}

function spwanObstacle(){
  push()
  if(frameCount % 270 === 0){
    Enemy = createSprite(camera.x+800,340,20,20)
    Enemy.velocityX = -(8 + 1*score/1000);
    var rand = Math.round(random(1,2))
    switch(rand){
     case 1: Enemy.addImage("car",Enemy2Img)
             Enemy.scale = 0.7
             Enemy.debug = true
             Enemy.setCollider("rectangle",0,0,220,100)
             break;
     case 2: Enemy.addImage("Police",EnemyImg)
             Enemy.debug = true
             Enemy.setCollider("rectangle",0,0,200,70)
     default: break;   

  }

  EnemyGroup.add(Enemy)
  
  pop()

  }





}




function speedPower(){
  if(frameCount % 800 === 0){
    Speed = createSprite(camera.x+800,357,20,20);
    Speed.addImage("speed",SpeedImg)
    Speed.scale = 0.26
    speedGroup.add(Speed);
  }
  

}




function Powerjump(){
if(frameCount % 1500 === 0){  
  Fly = createSprite(camera.x+800,357,20,20)
  Fly.addImage("fly",FlyImg)
  Fly.scale = 0.26
  jumpGroup.add(Fly)
}


}

function Getready(){
 if(frameCount % Math.round(random(1900,2700)) === 0){
  Full3 = createSprite(camera.x+800,357,20,20)
  Full3.addImage("fy",Full3Img)
  Full3.scale = 0.17
  fullGroup.add(Full3)
 }



}


function spwanGround(){
if(frameCount%700 === 0){
 Ground4 = createSprite(camera.x,390,20000,20)  
 var rand1 = Math.round(random(1,3))
 switch(rand1){
  case 1: Ground4.shapeColor = "aqua"
          break;
  case 2: Ground4.shapeColor = "green" 
          break;
  case 2: Ground4.shapeColor = "yellow"
  default: break;   

}

 GroundGroup.add(Ground4)
}

}



