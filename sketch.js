
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1,dustbin2,dustbin3;

var paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		 World.add(world, ground);
		 dustbin = new Dustbin(300,630,20,200);
	dustbin2= new Dustbin(550,630,20,200);
	dustbin3= new Dustbin(500,630,150,20)
World.add(world,dustbin1);
World.add(world,dustbin2);
World.add(world,dustbin3);
paper= new Paper(100,180,5);
World.add(world,paper);
	Engine.run(engine);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
    if	(keyCode===UP_ARROW){
		Matter.body.applyForce(paperObject.body.position,{x:85,y:85})
	}



}


