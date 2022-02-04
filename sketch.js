var ball; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground (width/2, 670, width, 20)
	leftSide = new Ground (850,600,20,120)
	rightSide = new Ground (1100,600,20,120)
    var balls_option ={
	isStatic: false,
    restitution: 0.5,
	friction: 0,
	density: 1.2
	
	}
	
	keyPressed ();
  

	//Create the Bodies Here.
    ball =  Matter.Bodies.circle (50,100,20,balls_option,)
    World.add (world,ball)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update (engine)
  ellipse(ball.position.x, ball.position.y, 20) 
  
 
	

  drawSprites();

 

  ground.display ();
  leftSide.display ();
  rightSide.display ();

  
	  
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce  (ball, {x:0, y:-4}, {x: 1, y:-10});
	}
}


  