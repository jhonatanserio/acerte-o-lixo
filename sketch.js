const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var bolas;
var lixo;
var lixo2;
var chao;

function preload()
{
 bola=loadImage("papel.jpg")
}

function setup() {
	createCanvas(600,500);
	


	engine = Engine.create();
	world = engine.world;

	var bolas_options = {
		restitution: 0.95,
		friction: 0.01,
		density: 0.25
	}
	var chao_options = {
		isStatic:true
	}
	var lixo_options = {
		isStatic:true
	}
	var lixo2_options = {
		isStatic:true
	}
	
	bolas=Bodies.circle(50,10,20,bolas_options)
	World.add(world,bolas)
	chao=Bodies.rectangle(300,490,600,20,chao_options)
	World.add(world,chao)
	lixo=Bodies.rectangle(560,450,20,100,lixo_options)
	World.add(world,lixo)
	lixo2=Bodies.rectangle(450,450,20,100,lixo2_options)
	World.add(world,lixo2)

	
	ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  Engine.update(engine)
  
  background("black");
  image(bola,bolas.position.x,bolas.position.y,20,30)
  rect(chao.position.x,chao.position.y,600,20)
  rect(lixo.position.x,lixo.position.y,20,100)
  rect(lixo2.position.x,lixo2.position.y,20,100)
  drawSprites();
}
function keyPressed(){
 if (keyCode==UP_ARROW){
	 Matter.Body.applyForce(bolas,bolas.position,{x:10,y:10})
 }
}



