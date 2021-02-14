
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,supportGround,bobOne,bobTwo,bobThree,bobFour,bobFive;
var ropeOne,ropeTwo,ropeThree,ropeFour,ropeFive;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,150,500,50);
	supportGround = new Ground(400,680,800,40);
	bobOne = new Bob(300,600,40);
	ropeOne = new Rope(bobOne.body,ground.body,-80*2,0);
	bobTwo = new Bob(400,600,40);
	ropeTwo = new Rope(bobTwo.body,ground.body,-40*2,0);
	bobThree = new Bob(550,600,40);
	ropeThree = new Rope(bobThree.body,ground.body,40*2,0);
	bobFour = new Bob(600,600,40);
	ropeFour = new Rope(bobFour.body,ground.body,80*2,0);
	bobFive = new Bob(475,600,40);
	ropeFive = new Rope(bobFive.body,ground.body,2*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(340,150,200);

  ground.display();
  supportGround.display();
  bobOne.display();
  ropeOne.display();
  bobTwo.display();
  ropeTwo.display();
  bobThree.display();
  ropeThree.display();
  bobFour.display();
  ropeFour.display();
  bobFive.display();
  ropeFive.display();
  
  
  drawSprites();
 
}



