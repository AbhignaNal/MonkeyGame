
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var spawnBanana, spawnObstacle;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 400);

  monkey = createSprite(100, 260, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 290, 400, 1);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
background("white");
  fill("black");
  textFont("veranda");
  textSize(14);
  text("Survival Time:" + " " + score, 280, 30);
  score = score + Math.round(frameRate()/60);
  
  ground.velocityX = -4;
  if (ground.x < 200) {
   ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(keyWentDown("space") && monkey.y >=100){
    monkey.velocityY = -16;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  drawSprites();
  spawnBanana();
  spawnObstacle();
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
  var banana = createSprite(250, 150, 10, 10);
  banana.y = Math.round(random(120, 200));
  banana.addImage(bananaImage);
  banana.scale = 0.075;
  banana.velocityX = -4;
  banana.lifetime = 100;
  
  FoodGroup.add(banana);
  
  }
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(250, 260, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}
