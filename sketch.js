var Hermione, HermioneImage;
var DeathEater, DeathEaterImage;
var ground, groundImage;
var obstacle, obstacleImage;
var GameOver, GameOverImage;
var score = 0;

var obstaclesGroup, DeathEatersGroup

function preload(){
  HermioneImage = loadImage("HERMIONE.png")
  DeathEaterImage = loadImage("DeathEater.jpeg")
  obstacleImage = loadImage("Hocurx.jpg")
  GameOverImage = loadImage("over.png")
}

function setup(){
createCanvas(860, 400)

Hermione = createSprite(700, 300, 20, 20);
Hermione.addImage(HermioneImage)
Hermione.scale = 0.5;

DeathEatersGroup = new Group();
obstaclesGroup = new Group();

ground = createSprite(430, 385, 1800 ,10);
ground.velocityX = 4

GameOver = createSprite(430, 80, 50,50);
GameOver.addImage(GameOverImage)
GameOver.visible = false;
GameOver.scale = 0.2
}

function draw(){
    background("white");
       goal();
      obstacles();
    if(keyWentDown("space")) {
        Hermione.velocityY = -20;
      }
    if(keyWentUp("space")){
        Hermione.velocityY = 14;
    }
    Hermione.velocityY = Hermione.velocityY + 0.8

    if(ground.x > 860) {
      ground.x = 430
    }
    if(obstaclesGroup.isTouching(Hermione)){
        obstaclesGroup.destroyEach();
        score = score + 20
     }
     if(DeathEatersGroup.isTouching(Hermione)){
        GameOver.visible = true;
         ground.velocityX = 0;
         obstaclesGroup.setVelocityXEach(0);
         DeathEatersGroup.setVelocityXEach(0);
    }
      Hermione.collide(ground);
  
drawSprites();
}
function goal(){
if (frameCount % 250 === 0) {
    obstacle = createSprite(-200, random(80, 200), 20, 20)
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = 8;
      
      obstaclesGroup.add(obstacle);
      }
    }
function obstacles(){
    if (frameCount % 150 === 0) {
      DeathEater = createSprite(-200, 350, 20, 20)
      DeathEater.addImage(DeathEaterImage);
     DeathEater.scale = 0.3;
      DeathEater.velocityX = 8;
      DeathEatersGroup.add(DeathEater)
    }
    }