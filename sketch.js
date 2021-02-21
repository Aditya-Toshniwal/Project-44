const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background, backgroundImg;
var player,ball;
var engine,world;
function preload(){
backgroundImg= loadImage("images/Basketball court.jpg");
}
function setup() {
  engine=Engine.create();
  world= engine.world; 
  createCanvas(2500,1000);
  player= new Player(500,800,20,20);
  player.scale= 0.4;
  ball= new Ball(2000,800,30);
}

function draw() {
  background(backgroundImg);
  player.display();
  ball.display(); 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("hello");
    translation={x:0,y:-50};
    Matter.Body.translate(player.body,translation);

  } 
  else if(keyCode===DOWN_ARROW){
    translation={x:0,y:+50};
    Matter.Body.translate(player.body,translation);
  }
  else if(keyCode===LEFT_ARROW){
    translation={x:-50,y:0};
    Matter.Body.translate(player.body,translation);
  }
  else if(keyCode===RIGHT_ARROW){
    translation={x:+50,y:0};
    Matter.Body.translate(player.body,translation);
  }
 }

 
  