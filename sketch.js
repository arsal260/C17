const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;


var  ground;
var myEngine,myWorld;
var ball
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create(); 
  myWorld=myEngine.world;

  ground=Bodies.rectangle(400,350,800,20,{isStatic:true});
  ball=Bodies.circle(50,50,20,{restitution:1});
  World.add(myWorld,ball)

  World.add(myWorld,ground)
 console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(myEngine);
 // console.log(box.position.y);
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
 ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}