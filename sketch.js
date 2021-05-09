
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dI

function preload()
{
	dI=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,650,800,10)
    paper=new Paper(50,78,20,20)
	box1=new Dustbin(400,645,150,10 )
	box2=new Dustbin(330,600,10,100 )
	box3=new Dustbin(470,600,10,100 )
	dustbin=createSprite(400,580,7,2)
    dustbin.addImage(dI)
	dustbin.scale=0.5


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display()
  ground.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-45})
	}
}

