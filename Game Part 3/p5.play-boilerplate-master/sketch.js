var bk,bkImg

var ship1,ship1Img
var ship2,ship2Img
var evilShip2,evilShip2Img
var evilShip1,evilShip1Img


var bulletGroup 
var evilShipGroup
var evilShipGroup2

var bullet
var count = 0;
var level = 1

function preload(){
  ship1Img = loadImage("Ship1.png")
  ship2Img = loadImage("Ship2.png")
  evilShip1Img = loadImage("Evilship1.png")
  evilShip2Img = loadImage("Evilship2.png")
  bkImg = loadImage("spaceImage.jpg")
  
}

function setup() {
  createCanvas(800,400);
  bk = createSprite(0,0,800,400)
  bk.addImage(bkImg)
  bk.velocityY = 1
 
  ship1 =  createSprite(400,375,25,25)
 ship1.addImage(ship1Img)
 ship1.scale = 2

evilShipGroup = createGroup()
evilShipGroup2 = createGroup()
bulletGroup = createGroup()
}

function draw() {
  background(0);  
  
  //text(mouseX +","+mouseY,100,100)
 
  if(ship1.x < 25){
    ship1.x = 25
  }
  if(ship1.x > width - 25){
    ship1.x = width - 25
  }
 
 
  if(keyDown(RIGHT_ARROW)){
   ship1.x = ship1.x + 15
 }
 if(keyDown(LEFT_ARROW)){
  ship1.x = ship1.x - 15
}

 evilShipSpawn();
 
 bulletSpawn();
 if(count >= 10 ){
  evilShip2Spawn();
  ship1.addImage(ship2Img)
  bullet.shapeColor = "red"
  bullet.velocityY +=-17
  
 }

 
 
if(bulletGroup.isTouching(evilShipGroup)){
  evilShipGroup[0].destroy()
  count = count + 1;
}
if(bulletGroup.isTouching(evilShipGroup2)){
  evilShipGroup2[0].destroy()
  count= count+ 1;
}

drawSprites();
textSize(20)
fill("white")
text("SCORE:" + count ,20,25)
textSize(20)
fill("white")
text("LEVEL " + level,20,50)
}

function bulletSpawn(){
  if(keyDown("space") && frameCount % 10 === 0 ){
  bullet = createSprite(ship1.x,ship1.y - 25,7,15)
  bullet.velocityY += -14
  bullet.shapeColor = "white"
  bulletGroup.add(bullet)
  bullet.lifetime = 100
  }
}
function evilShipSpawn(){
  if(frameCount % 60 === 0){
    evilShip1 = createSprite(0,0,25,25)
    evilShip1.x = Math.round(random(25,775))
    evilShip1.addImage(evilShip1Img)
    evilShip1.scale = 1.5
    evilShip1.velocityY = evilShip1.velocityY += 4
    evilShipGroup.add(evilShip1)
    evilShip1.lifetime = 500 
    if(evilShip1.y >= 400){
      createSprite(400,200,800,400)
      textSize(30)
      fill("white")
      text("GAME OVER",400,200)
      }
  
  } 


  
}
function evilShip2Spawn(){
  if( frameCount %120 === 0){
    evilShip2 = createSprite(0,0,25,25)
    evilShip2.x = Math.round(random(25,775))
    evilShip2.addImage(evilShip2Img)
    evilShip2.scale = 1.5
    evilShip2.velocityY = evilShip2.velocityY += 5
    evilShip2.lifetime = 500
    evilShipGroup2.add(evilShip2)
    level = 2
  }
} 