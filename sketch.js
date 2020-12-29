const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,bodies;
var ball,basketballFloorImage,hoopImage,hoop,boyImage,boy;
var chain;
function preload(){
basketballFloorImage=loadImage("floor.jpg");
hoopImage=loadImage("basketballhoop.png");
//boyImage=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png");

}

function setup(){
    createCanvas(1000,1000);
engine=Engine.create();
world=engine.world;
ball=new Ball(500,500,30);
hoop=createSprite(900,500,20,20);
hoop.addImage(hoopImage);
boy=new Boy(700,500,100,100);
chain=new constraint(boy.body,ball.body)
}

function draw(){
    background(basketballFloorImage);
Engine.update(engine);
boy.display();

ball.display();
chain.display();
drawSprites();
}