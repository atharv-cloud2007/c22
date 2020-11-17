const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;



var engine, world, object,ground;


function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var option ={
  restitution:2
}
object = Bodies.circle(200,200,50,option)
World.add(world, object)
var option1 ={
  isStatic : true
}
ground=Bodies.rectangle(200,300,50,50,option1)
World.add(world,ground)
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400,50)
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,50,30)
}