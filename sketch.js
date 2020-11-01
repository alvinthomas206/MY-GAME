

var bow ,bowImage;
var arrowGroup, arrowImage;
var background, backgroundImage;
var redB,red_balloonImage;
var pinkB, pink_balloonImage ;
var greenB ,green_balloonImage;
var blueB,blue_balloonImage
var up,down,upImage,downImage

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  upImage=loadImage("PinClipart.com_large-arrow-clipart_3651856.png");
  downImage=loadImage("PinClipart.com_large-arrow-clipart_3651856 (2).png")
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(width-150,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   up = createSprite(50,height-110);
  up.addImage(upImage);
  up.scale=0.05
  
  down = createSprite(50,height-50);
  down.addImage(downImage);
  down.scale=0.05
  
  
   score = 0  
 
   redB= createGroup();
   greenB= createGroup();
   pinkB= createGroup();
   blueB= createGroup();
   arrowGroup= createGroup();
  
  
  
  
}


function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  
  if ((touches.length>0)||keyDown("space"))
  {
    createArrow();
    touches=[];
    
  }
  
  if (arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
    score = score+1;
 }
  
  if (arrowGroup.isTouching(greenB)){
   greenB.destroyEach();
   arrowGroup.destroyEach();
    score = score+2;
 }
  
  if (arrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   arrowGroup.destroyEach();
    score = score+3;
 }
  
  if (arrowGroup.isTouching(blueB)){
   blueB.destroyEach();
   arrowGroup.destroyEach();
    score = score+4;
 }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

if(mousePressedOver(up)) {
      bow.velocityY=4
    }
  
  if(mousePressedOver(down)) {
      bow.velocityY=-4
    }
 
  
  drawSprites();
    text("Score: "+ score, 500,50);
}




function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red)
  
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = width-200;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)  
  arrow.setCollider("rectangle",0,0,150,10,0);
  arrow.debug=false
  
}
