
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1500,1500);
    
	groundObj=new Ground(width/2,670,width,20)
	leftSide=new Ground(1100,600,20,120)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	var ball_option={
		restitution:03,
		friction:0,
		density:1.2,
	}
	
	ball=Bodies.circle(50,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
groundObj.show()
groundObj=new  
 function keyPressed(){
 if (keyCode === up__Arrow){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

	if (keyCode===rightArrow){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
 }
 }

  drawSprites();
 
}



